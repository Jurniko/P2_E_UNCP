import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-h',
  templateUrl: './m-h.component.html',
})
export class MHComponent implements OnInit {
  @Input() type:string = "p-4"
  @Input() color:string = "black"
  class : string = ""
  constructor() { }

  ngOnInit(): void {
    this.class =this.generateH(this.type);
    this.class += " text-"+this.color

  }

  generateH(type:string){
    type = type.toLocaleLowerCase();
    let classInit = 'py-8 ';
    switch(type){
      case "p-1":
        classInit += " text-center lg:text-5xl md:text-4xl text-3xl font-extrabold tracking-widest";
        break;

      case "p-2":
        classInit += " text-center lg:text-4xl md:text-3xl text-2xl font-extrabold tracking-widest";
        break;
      case "p-3":
        classInit += " text-center lg:text-3xl md:text-2xl text-xl font-extrabold tracking-widest";
        break;
      case "p-4":
        break;
      case "p-5":
        break;
    }
    return classInit;
  }

}
