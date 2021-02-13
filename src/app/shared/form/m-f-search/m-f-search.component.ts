import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(characters=>{
      this.valueSearching.emit(characters)
    })
  }

}
