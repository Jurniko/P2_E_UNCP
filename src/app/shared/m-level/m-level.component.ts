import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'm-level',
  templateUrl: './m-level.component.html'
})
export class MLevelComponent implements OnInit {
  @Input() rol: string = "user" ;
  @Input() lvl: number = 0;
  @Input() color: string = "normal"
  isAdmin : boolean= false ;
  isHidden : boolean = false ;
  classP : string = '';

  @Output() hidden : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.rol = this.rol.toLocaleLowerCase();
    if( this.rol == "admin") { this.isAdmin = true}

    this.classP = this.generateClass(this.color);

  }

  generateClass(type:string) : string {
    let classInit = 'ml-4 font-semibold'
    switch(type){
      case "normal":
        classInit += " text-blue-600";
      break;
      case "white":
        classInit += " text-white"
      break;
    }

    return classInit
  }


}
