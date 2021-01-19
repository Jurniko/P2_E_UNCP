import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {
  @Output() next : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() ppmValue : number = 0;
  result : {nivel:string,message:string} = {} as {nivel:string,message:string};
  constructor() { }

  ngOnInit(): void {
    this.result = this.generateMessage(this.ppmValue);
  }


  generateMessage(ppm:number = 1) : {nivel:string,message:string}{
    let message : { nivel : string,message: string } = {} as { nivel : string,message: string };
    switch(true){
      case  ppm>=360  :
        message.nivel="Excelente";
        message.message="¡ Genial ! Buena puntuación, sigue así."
      break;
      case ( ppm>=220 && ppm<360):
        message.nivel="Bueno";
        message.message="¡ WOW ! Buena puntuación, sigue así."
      break;
      case ( ppm>=190 && ppm<220):
        message.nivel="Normal";
        message.message=" :) ¡¡ Muy Bien !! . Sigue así."
      break;
      case  ( ppm>=170 && ppm<190):
       message.nivel="Insuficiente";
        message.message=" :) No tan buena puntuación, pero se puede mejorar. Sigue así."
      break;
      case  ( ppm>=0 && ppm<170):
        message.nivel="Muy deficiente";
        message.message=":( Ha seguir intentando y prácticando. Sigue así."
      break;
    }
    return message;
  }

}
