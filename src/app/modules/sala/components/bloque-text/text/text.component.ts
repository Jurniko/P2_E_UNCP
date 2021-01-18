import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { debounce, debounceTime } from 'rxjs/operators';
import { VoiceRecognitionService } from '../../../services/voice-recognition.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent implements OnInit,OnChanges{
  @Input() text:string = ` `;

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
    this.text = changeText.currentValue;
    this.textSacri= this.text;
    this.textInner = this.addTagHTML(this.text);
    this.numberWords = this.text.split(' ').length;
  }

  startSpeech() {
    this.readingTimeInSeconds = 0; // reiniciamos el tiempo de lectura
    this.textSacri = this.text;
    this.textInner =  this.addTagHTML(this.text);
    this.voiceService.start().subscribe(res=>{
      console.log(res,"obsersanvo")
      let a =  res.split(' ');
      let length = a.length;

      let lasLetter = a[length-1].toLocaleLowerCase(); // obtenemos la ultima palabra hablada


      this.innerMarkProgress(lasLetter);

    });

    this.startStopwatch()
  }

  stopSpeech(){
    this.voiceService.stop();

    if( this.textSacri.length < 100){ // Si solo quedan 50 letras por leer, se pueda usar el botón siguiente.
      this.sucessfulRead.emit(true);
      console.log("El tiempo de velocidad de lectura es de ", this.PPM())
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

    this.textSacri = this.text.substring( this.indiceGuia,this.text.length+1); // LE DAMOS SU RESTO

    let textAntes = this.text.substring(0, this.indiceGuia);
    console.log("Length de texto que falta leer", this.textSacri.length)
    let textDespues = this.text.substring( this.indiceGuia,this.text.length+1);
    this.textInner = '<mark>'+textAntes+'</mark>'+textDespues
  }

  startStopwatch(){
    this.intervalFunction = setInterval(()=>{
      this.readingTimeInSeconds += 1;
      this.readingTimeInSeconds = +(this.readingTimeInSeconds.toFixed(2));
      console.log(this.readingTimeInSeconds)
    },1000)

  }

  stopStopwatch(){
    clearInterval(this.intervalFunction);
  }

  PPM() : number{
    let minutes = this.readingTimeInSeconds/60;
    return +((this.numberWords/minutes).toFixed(2));
  }

}
