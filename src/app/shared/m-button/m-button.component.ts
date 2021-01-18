import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './m-button.component.html'
})
export class MButtonComponent implements OnInit {
  @Input() type : string = "normal" ;
  @Input() submit : boolean = false;
  class:string = "";
  @Input() disabled : boolean = false ;

  constructor() { }

  ngOnInit(): void {this.class = this.generateColor(this.type);}


  generateColor(type:string = "normal") : string{
    let classInit= "rounded py-2 px-6 shadow text-white font-semibold my-2 "
    type = type.toLocaleLowerCase();
    switch(type){
      case "normal":
        classInit += " bg-purple-500 hover:bg-purple-700"
        break;
      case "add":
        classInit += " bg-green-400 hover:bg-green-500"
        break;
      case "back":
        classInit += " bg-pink-500 hover:bg-pink-700 "
        break;
    }

    return classInit ;
  }

}
