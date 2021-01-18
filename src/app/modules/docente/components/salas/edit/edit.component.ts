import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/interfaces/room.interface';
import { environment } from 'src/environments/environment';
import { DocenteService } from '../../../services/docente.service';

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

  url = environment.domainFront+"sala/";
  constructor(private rutaActiva:ActivatedRoute,private formBuilder:FormBuilder, private docenteService:DocenteService,private route:Router) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(param=>{
      this.idRoom = param.id;
      this.init$();
    })

    this.form = this.formBuilder.group({
      description:['',Validators.required],
      enrollment_codes:['',Validators.required]
    })
  }

  init$(){
    this.docenteService.getRoomById(this.idRoom).subscribe(res=>{
      this.roomData = res
      this.url +=this.roomData.code;
      this.form.get('description')?.setValue(this.roomData.description);
      this.form.get('enrollment_codes')?.setValue(this.roomData.enrollment_codes?.join());
      console.log(this.roomData)
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
    console.log(roomF.enrollment_codes)
    this.docenteService.editRoom(roomF).subscribe((res:Room)=>{
      this.openModal = true ;
      this.route.navigate(["/docente/salas/"])
    })

  }

}
