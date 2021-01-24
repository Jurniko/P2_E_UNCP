import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html'
})
export class VidComponent implements OnInit {
  @Input() videoId : string = '';
  @Output() finishVid : EventEmitter<boolean> =  new EventEmitter<boolean>();
  screenWidth:number = 0;
  screenHeight:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth*0.7;
    this.screenHeight = window.innerHeight*0.7;
  }

  stateOfVid(status: any){
    if(status.data == 0){
      this.finishVid.emit(true)
    }
  }


}
