import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/interfaces/room.interface';
import { Student } from 'src/app/interfaces/student.interface';
import { SalaService } from 'src/app/modules/sala/services/sala.service';
import { DocenteService } from '../../services/docente.service';


@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
})
export class SalasComponent implements OnInit {
  searching :string = ''
  rooms:Room[] = [] as Room[];
  current : any ;

  constructor(private route:Router, private docenteService:DocenteService) { }

  ngOnInit(): void {
  this.init$();
  }

  init$(){
    this.docenteService.getAllRooms().subscribe((res:Room[])=>{
      this.rooms = res;
      console.log(this.rooms)
    })
  }
  newRoom(){
    this.route.navigate(['docente/nueva-sala'])
  }

  checkingRoom(code:string){
    this.route.navigate(['docente/salas/'+code])
  }
  
}
