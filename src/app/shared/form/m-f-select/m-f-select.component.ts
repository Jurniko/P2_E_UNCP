import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'm-f-select',
  templateUrl: './m-f-select.component.html',
})
export class MFSelectComponent implements OnInit {
  @Input() label : string = '';
  @Input() dataSelect ?: any[] = [{}];
  @Input() formGroup : FormGroup = new FormGroup({});
  @Input() controlName : string = '';
  @Input() nameGroupInput: string = ""

  /*
  * dataSelect:
    [
      {name:any , value:any, property:any}
    ]
    {{  data[data.property]  }} logra ingresar al valor de property

    entonces property puede ser cualqueir valor. (y)
  */
  formControl : FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.formControl= this.formGroup.get(this.controlName) as FormControl;
  }

}
