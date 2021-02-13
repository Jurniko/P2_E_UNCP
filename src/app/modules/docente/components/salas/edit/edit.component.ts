import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Room } from 'src/app/interfaces/room.interface';
import { environment } from 'src/environments/environment';
import { DocenteService } from '../../../services/docente.service';

@UntilDestroy()
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  idRoom : number = 0;
  roomCreated : Room = {} as Room;
  openModal : boolean = false;
  roomData : Room = {} as Room;
  form:FormGroup = new FormGroup({});

  url :string = "";

  constructor(private rutaActiva:ActivatedRoute,private formBuilder:FormBuilder, private docenteService:DocenteService,private route:Router,location:Location) { }

  ngOnInit(): void {
    this.rutaActiva.params.pipe(untilDestroyed(this)).subscribe(param=>{
      this.idRoom = param.id;
      this.init$();
    })
    this.url = location.origin+"/#/sala/"
    this.form = this.formBuilder.group({
      description:['',Validators.required],
      enrollment_codes:['',Validators.required]
    })
  }

  init$(){
    this.docenteService.getRoomById(this.idRoom).pipe(untilDestroyed(this)).subscribe(res=>{
      this.roomData = res
      this.url +=this.roomData.code;
      this.form.get('description')?.setValue(this.roomData.description);
      this.form.get('enrollment_codes')?.setValue(this.roomData.enrollment_codes?.join());
    })
  }
  copyCode(input : any){
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0,0);
  }

  exitPage(){
    this.route.navigate(['docente/salas'])
  }
  onSubmit(){
    let roomF :Room = {} as Room;
    roomF.id = this.idRoom;
    roomF.description = this.form.get('description')?.value;
    roomF.enrollment_codes = (this.form.get('enrollment_codes')?.value).split(',');
    this.docenteService.editRoom(roomF).pipe(untilDestroyed(this)).subscribe((res:Room)=>{
      this.openModal = true ;
      this.route.navigate(["/docente/salas/"])
    })

  }

}
