import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'm-f-textarea',
  templateUrl: './m-f-textarea.component.html'
})
export class MFTextareaComponent implements OnInit {

  @Input() label : string = '';
  @Input() formGroup : FormGroup = new FormGroup({});
  @Input() controlName : string = '';
  @Input() placeHolder : string = '';
  @Input() letterCase : string = ''
  formControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {

    this.formControl= this.formGroup.get(this.controlName) as FormControl;

  }

}
