import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'modal-sala',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() codeRoom : string = '';
  domain : string = "";

  @Output() back : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private route:Router, private location:Location) { }

  ngOnInit(): void {
    this.domain = location.origin+"/"+this.codeRoom
  }

  copyCode(input : any){
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0,0);
  }

  navigate(){
    this.route.navigate(['docente/salas'])
  }

}
