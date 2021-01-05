import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'm-f-input',
  templateUrl: './m-f-input.component.html',
  styleUrls: ['./m-f-input.component.scss']
})
export class MFInputComponent implements OnInit {
  @Input() label : string = '';
  @Input() type : string = 'text';
  @Input() dataSelect ?: any[] = [];
  @Input() controlForm : FormGroup = new FormGroup({});
  @Input() controlName : string = '';

  formControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {

    this.formControl= this.controlForm.get(this.controlName) as FormControl;

  }

}
