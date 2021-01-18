import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/interfaces/room.interface';
import { DocenteService } from '../../../services/docente.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  //ENVIAR enrollment_codes:['','','','','']
  codeRoom : string = "";
  roomCreated : Room = {} as Room;
  openModal : boolean = false;

  form:FormGroup = new FormGroup({});
  constructor(private route:Router,private formBuilder:FormBuilder, private docenteService:DocenteService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description:['',Validators.required],
      enrollment_codes:['',Validators.required]
    })
  }


  exitPage(){
    this.route.navigate(['docente/salas'])
  }



  onSubmit(){
    let roomF :Room = {} as Room;
    roomF.description = this.form.get('description')?.value;
    roomF.enrollment_codes = (this.form.get('enrollment_codes')?.value).split(',');

    this.docenteService.createRoom(roomF).subscribe((res:Room)=>{
      this.roomCreated = res;
      this.openModal = true ;
    })
  }
}
