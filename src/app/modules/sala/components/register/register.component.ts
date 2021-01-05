import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  codigoSala : string = "" ;
  next : Boolean = false ;
  constructor( private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(param=>{
      this.codigoSala = param.codigo;
        console.log(this.codigoSala)
    })
  }


}
