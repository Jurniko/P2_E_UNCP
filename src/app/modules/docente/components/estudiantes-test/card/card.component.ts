import { Component, Input, OnInit } from '@angular/core';
import { BodyReportLevel } from 'src/app/interfaces/reports.inteface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() codeGroupBlock : string = '';
  @Input() data : any;
  blocks : BodyReportLevel[] = [] as BodyReportLevel[];

  styles = {
    svgGood:"assets/estudiante/buena.svg",

    svgBad:"assets/estudiante/mal.svg",
    scoreBad : 0
  }
  constructor() { }

  ngOnInit(): void {
    this.blocks = this.data[this.codeGroupBlock]
    console.log(this.codeGroupBlock)
    console.log(this.blocks,"EEreasd")
  }

  isCorrect(block:BodyReportLevel,idQuestion:number){
    let iscorrectQuestion =  block.correct_questions_id?.indexOf(String(idQuestion))
    if(iscorrectQuestion != -1 ){
      return true;
    }
    else{
      return false;
    }
  }

  minutesAndSeconds(seconds:number) : string {
    const segundos = (Math.round(seconds % 0x3C)).toString();
    const horas    = (Math.floor(seconds / 0xE10)).toString();
    const minutes  = (Math.floor(seconds / 0x3C ) % 0x3C).toString();

    return `${minutes} minutos y ${segundos} segundos`;
  }
}
