import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog : boolean = false;
  public text : string = '';
  tempWords : any ;

  constructor() { }

  init()  {
    this.recognition.interimResults = true;
    this.recognition.lang = 'es-PE';


  }

  start() : Observable<string> {
    return Observable.create((observer:Observer<string>)=>{
      this.isStoppedSpeechRecog = false;
      this.recognition.start();

      this.recognition.addEventListener('result', (e : any) => {
        const transcript = Array.from(e.results)
        .map((result : any) => result[0])
        .map((result : any) => result.transcript)
        .join('');
        observer.next( transcript )
        this.tempWords = transcript;
        console.log("captando xd :", transcript)
        });

      this.recognition.addEventListener('end', (condition:any) => {
          if (this.isStoppedSpeechRecog) {
          this.recognition.stop();
          observer.complete();
          } else {

          this.wordConcat();
          //observer.next( this.text )

          this.text = ""; //Para no sobrecargar
          this.recognition.start();
          }
      });
    })

  }


  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }


}
