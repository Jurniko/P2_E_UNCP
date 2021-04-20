import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'indications',
  templateUrl: './indications.component.html',
})
export class IndicationsComponent implements OnInit {
  locale = location.origin

  showInfo : boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
}
