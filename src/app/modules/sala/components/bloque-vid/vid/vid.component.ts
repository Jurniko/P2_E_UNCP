import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html'
})
export class VidComponent implements OnInit {
  @Input() videoId : string = '';
  @Output() finishVid : EventEmitter<boolean> =  new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  stateOfVid(status: any){
    if(status.data == 0){
      this.finishVid.emit(true)
    }
  }

}
