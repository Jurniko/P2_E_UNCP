import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Room } from 'src/app/interfaces/room.interface';
import { DocenteService } from '../../../services/docente.service';

@UntilDestroy()
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
    let formValue = this.form.value
    roomF.description = formValue.description;
    roomF.enrollment_codes = (formValue.enrollment_codes.toUpperCase()).split(',');

    this.docenteService.createRoom(roomF).pipe(untilDestroyed(this)).subscribe((res:Room)=>{
      this.roomCreated = res;
      this.openModal = true ;
    })
  }
}
