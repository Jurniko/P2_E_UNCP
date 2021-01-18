import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'm-f-search',
  templateUrl: './m-f-search.component.html'
})
export class MFSearchComponent implements OnInit {
  @Output() valueSearching : EventEmitter<string> = new EventEmitter<string>();
  @Input() placeHolder :string = "Buscar ..."
  form : FormControl = new FormControl() ;
  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(characters=>{
      this.valueSearching.emit(characters)
    })
  }

}
