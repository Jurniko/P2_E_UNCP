import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'm-hidden',
  templateUrl: './m-hidden.component.html',
})
export class MHiddenComponent implements OnInit {
  @Output() hidden : EventEmitter<boolean> = new EventEmitter();
  isHidden:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }



}
