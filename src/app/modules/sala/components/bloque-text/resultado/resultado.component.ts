import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { removeStorageResult, setStorageResult, verifyAttemptStorageResult } from 'src/app/utils/storageResult.utils';

interface Result  {
  nivel:string,
  message:string,
  attempt:number,
  points:number};
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})

export class ResultadoComponent implements OnInit {
  @Output() next : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() ppmValue : number = 0;
  @Input() text: string = "";
  @Output() attemptClick :  EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() extraPoints : EventEmitter<number> = new EventEmitter();
  result : Result = {} as Result;

  readAgain : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.result = this.generateMessage(this.ppmValue);
    this.verifyAttempt();
  }


  generateMessage(ppm:number = 1) : Result{
    let result : Result = {} as Result;
    switch(true){
      case  ppm>=360  :
        result.nivel="Excelente";
        result.message="¡ Genial ! Buena puntuación, sigue así.",
        result.attempt = 0,
        result.points = 10;
        this.extraPoints.emit(result.points);

      break;
      case ( ppm>=220 && ppm<360):
        result.nivel="Bueno";
        result.message="¡ WOW ! Buena puntuación, sigue así.",
        result.attempt = 0,
        result.points=8;
        this.extraPoints.emit(result.points);
      break;
      case ( ppm>=190 && ppm<220):
        result.nivel="Normal";
        result.message=" :) ¡¡ Muy Bien !! . Sigue así.",
        result.attempt = 0;
        result.points = 6
        this.extraPoints.emit(result.points);

      break;
      case  ( ppm>=170 && ppm<190):
        result.nivel="Insuficiente";
        result.message =" :) No tan buena puntuación, pero se puede mejorar. Sigue así.",
        result.attempt = 1;
        result.points = 4
        this.extraPoints.emit(result.points);

      break;
      case  ( ppm>=0 && ppm<170):
        result.nivel="Muy deficiente";
        result.message = ":( Ha seguir intentando y prácticando. Sigue así.",
        result.attempt = 1;
        result.points = 2;
        this.extraPoints.emit(result.points);
      break;
    }
    return result;
  }
  usingAttempt(){
    setStorageResult();
    this.attemptClick.emit(true);
  }

  verifyAttempt(){
    if(verifyAttemptStorageResult()){
      this.result.attempt = 0 ;
    }
  }

  startQuestions(){
    removeStorageResult();
    this.next.emit(true)
  }

}
