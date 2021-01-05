import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-level',
  templateUrl: './m-level.component.html',
  styleUrls: ['./m-level.component.scss']
})
export class MLevelComponent implements OnInit {
  @Input() rol: string = "user" ;

  isAdmin : boolean= false ;
  isHidden : boolean = false ;
  constructor() { }

  ngOnInit(): void {
    this.rol = this.rol.toLocaleLowerCase();
    if( this.rol == "admin") { this.isAdmin = true}
  }


}
