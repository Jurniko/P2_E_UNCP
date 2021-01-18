import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'm-f-input',
  templateUrl: './m-f-input.component.html',
})
export class MFInputComponent implements OnInit {
  @Input() label : string = '';
  @Input() type : string = 'text';
  @Input() formGroup : FormGroup = new FormGroup({});
  @Input() controlName : string = '';
  @Input() maxLength ?: number = 0;
  @Input() placeHolder : string = ''
  formControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {

    this.formControl= this.formGroup.get(this.controlName) as FormControl;

  }

  get hasError(){
    return this.formControl.hasError(this.typeValidator$()) && this.formControl.touched;
  }

  messageErrorInput(){
    let nameValidator = this.typeValidator$();
    let message = ''
    switch(nameValidator){
      case "required":
      message = "Es necesario rellenar este casillero";
        break;
      case "email":
        message = "Lo ingresado tiene que ser un Email."
        break;
      case "minLength":
        message = "Lo ingresado no contiene la cantidad de caracteres permitidos."
        break;
    }
    return message;

  }

  /*
  * this.formControl.erros solo contiene una propiedad
  * Si se valida required, pasa al siguiente asignado.
  */

  typeValidator$() : string{
    let nameValidator = '';
    try{
      for( let a of Object.keys(this.formControl.errors as any)){
        nameValidator = a;
      }
    }catch(e){
      nameValidator = ''
    }

    return nameValidator;
  }

}

