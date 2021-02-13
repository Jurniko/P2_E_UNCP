import { AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './m-button.component.html',
})
export class MButtonComponent implements OnInit , OnChanges{
  @Input() type: string = 'normal';
  @Input() submit: boolean = false;
  class: string = '';
  @Input() disabled: boolean = false;
  @Input() addClass: string = '';

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(){ //Al cambiar de true -> o -> false , este captura los cambios
    if (this.disabled) {
      this.class = this.generateColorDisabled(this.type);
    } else {
      this.class = this.generateColorEnabled(this.type);
    }
    this.class += ' ' + this.addClass;
  }
  generateColorEnabled(type: string = 'normal'): string {
    let classInit = 'rounded py-2 px-6 shadow text-white font-semibold my-2 ';
    type = type.toLocaleLowerCase();
    switch (type) {
      case 'normal':
        classInit += ' bg-purple-500 hover:bg-purple-700 ';
        break;
      case 'add':
        classInit += ' bg-green-400 hover:bg-green-500';
        break;
      case 'back':
        classInit += ' bg-pink-500 hover:bg-pink-700 ';
        break;
    }

    return classInit;
  }
  generateColorDisabled(type: string = 'normal'): string {
    let classInit = 'rounded py-2 px-6 shadow text-gray-300 font-semibold my-2 shadow-inner ';
    type = type.toLocaleLowerCase();
    switch (type) {
      case 'normal':
        classInit += ' bg-purple-800 ';
        break;
      case 'add':
        classInit += ' bg-green-700 ';
        break;
      case 'back':
        classInit += ' bg-pink-800';
        break;
    }

    return classInit;
  }
}
