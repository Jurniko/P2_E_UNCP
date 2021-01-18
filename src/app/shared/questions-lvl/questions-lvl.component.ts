import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Alternatives } from 'src/app/interfaces/questions.interface';

@Component({
  selector: 'questions-lvl',
  templateUrl: './questions-lvl.component.html'
})
export class QuestionsLvlComponent implements OnInit{
  @Input() nameGroupInput : any = "x";
  @Input() text : string = "";
  @Input() alternatives : Alternatives[] = [{}] as Alternatives[];
  @Output() alternativeSelect : EventEmitter<number> = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }

  changeAlternativeSelect(){

  }

}
