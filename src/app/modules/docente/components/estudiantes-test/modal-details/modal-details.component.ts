import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
})
export class ModalDetailsComponent implements OnInit {
  screenWidth:number = 0;
  screenHeight:number = 0;


  @Input() problem : {problem:string,appreciation:string,questions:{question:string,correct:boolean}[]}[] = [] as any;
  @Output() close: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor() { }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth*0.4;
    this.screenHeight = window.innerHeight*0.4;
  }

}
