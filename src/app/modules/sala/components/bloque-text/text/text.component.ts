import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { debounce, debounceTime } from 'rxjs/operators';
import { VoiceRecognitionService } from '../../../services/voice-recognition.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent implements OnInit,OnChanges{
  @Input() text:string = `...`;

  isListening : boolean = false;
  textInner:string = '';
  textSacri:string = this.text;
  indiceGuia: number = 0;

  numberWords : number = 0;

  intervalFunction : any
  readingTimeInSeconds : number = 0;

  @Output() sucessfulRead : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ppm :  EventEmitter<number> = new EventEmitter<number>();

  constructor( private voiceService : VoiceRecognitionService ) { }

  ngOnInit(): void {
    this.voiceService.init();
  }

  ngOnChanges(changes:any){
    let changeText = changes['text'];
    this.text = changeText.currentValue//.replace(/<[^>]*>?/g, '');
    this.textSacri= this.text.toLowerCase();
    this.textInner = this.addTagHTML(this.text);
    this.numberWords = this.text.split(' ').length;
  }

  startSpeech() {
    this.readingTimeInSeconds = 0; // reiniciamos el tiempo de lectura
    this.indiceGuia=0;
    this.textSacri = this.text.toLowerCase();
    this.textInner =  this.addTagHTML(this.text);
    this.voiceService.start().pipe(debounceTime(650)).subscribe(res=>{

      let a =  res.split(' ');

      let length = a.length;

      let lasLetter = a[length-1].toLowerCase(); // obtenemos la ultima palabra hablada
      this.innerMarkProgress(lasLetter);

    });

    this.startStopwatch()
  }

  stopSpeech(){
    this.voiceService.stop();

    if( this.textSacri.length < 10){ // Si solo quedan 100 letras por leer, se pueda usar el botón siguiente.
      this.sucessfulRead.emit(true);
      this.ppm.emit(this.PPM());
    }else{
      this.sucessfulRead.emit(false);
    }

    this.stopStopwatch();
  }

  addTagHTML(text:string):string{
    return `<mark></mark>${text}`
  }

  innerMarkProgress(search:string){
/*
* indiceGuia es el puntero que va avanzando sin retroceder,  y textSacri, es quien se va eliminando la parte ya leida, para
* no redundar en palabras ya mencionadas.
*/
    this.indiceGuia +=  this.textSacri.search(search) + search.length; // Nos brinda el indice de la palabra antes.
    this.textSacri = this.text.substring( this.indiceGuia,this.text.length+1).toLowerCase(); // LE DAMOS SU RESTO

     let textAntes = this.text.substring(0, this.indiceGuia);
     let textDespues = this.text.substring( this.indiceGuia,this.text.length+1);
     this.textInner = '<mark>'+textAntes+'</mark>'+textDespues




   }
  searchingTagP(text:string, index:number){

  }


  PPM() : number{

    return +((this.numberWords/this.readingTimeInSeconds )*60).toFixed(2);
  }

  startStopwatch(){
    this.intervalFunction = setInterval(()=>{
      this.readingTimeInSeconds += 1;
      this.readingTimeInSeconds = +(this.readingTimeInSeconds.toFixed(2));
    },1000)

  }

  stopStopwatch(){
    clearInterval(this.intervalFunction);
  }


}
