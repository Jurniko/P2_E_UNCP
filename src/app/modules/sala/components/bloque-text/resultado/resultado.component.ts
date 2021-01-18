import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {
  @Output() next : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() ppmValue : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
