import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent implements OnInit {
  isListening : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
