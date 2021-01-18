import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'm-f-radio',
  templateUrl: './m-f-radio.component.html'
})
export class MFRadioComponent implements OnInit {
  @Input() label : string = 'label';
  @Input() value : any = '';
  @Input() nameGroupInput : any = ''
  @Output() selected : EventEmitter<any> = new EventEmitter<any>();

  @Input() formGroup : FormGroup = new FormGroup({});
  @Input() controlName : string = '';

  formControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    console.log(this.controlName)
    this.formControl= this.formGroup.get(this.controlName) as FormControl;
  }

}
