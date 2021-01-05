import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss']
})
export class MButtonComponent implements OnInit {
  @Input() type : string = "normal" ;

  class:string = "";
  constructor() { }

  ngOnInit(): void {
   this.class = this.generateColor(this.type);
  }


  generateColor(type:string = "normal") : string{
    let classInit= "rounded py-2 px-6 shadow text-white font-semibold my-4 "
    type = type.toLocaleLowerCase();
    switch(type){
      case "normal":
        classInit += " bg-blue-600 hover:bg-blue-700"
        break;
      case "add":
        classInit += " bg-green-400 hover:bg-green-500"
        break;
    }

    return classInit ;
  }

}
