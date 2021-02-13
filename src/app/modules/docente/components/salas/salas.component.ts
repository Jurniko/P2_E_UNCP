import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Room } from 'src/app/interfaces/room.interface';
import { Student } from 'src/app/interfaces/student.interface';
import { SalaService } from 'src/app/modules/sala/services/sala.service';
import { downloadFile } from 'src/app/utils/downloadFile.utils';
import { DocenteService } from '../../services/docente.service';

@UntilDestroy()
@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
})
export class SalasComponent implements OnInit {
  searching :string = ''
  rooms:Room[] = [] as Room[];
  current : any ;
  idDataChart = {
    code_id : ""
  }
  openChart : boolean = false;

  constructor(private route:Router, private docenteService:DocenteService) { }

  ngOnInit(): void {
  this.init$();
  }

  init$(){
    this.docenteService.getAllRooms().pipe(untilDestroyed(this)).subscribe((res:Room[])=>{
      this.rooms = res;
    })
  }

  newRoom(){
    this.route.navigate(['docente/nueva-sala'])
  }

  checkingRoom(code:string){
    this.route.navigate(['docente/salas/'+code])
  }

  openAnalysis(code:string){
    this.idDataChart.code_id = code;
    this.openChart = true;
  }

  downloadExcel(code:string){
    this.docenteService.downloadGroupExcelStudent(code).pipe(untilDestroyed(this)).subscribe(res=>{
      downloadFile(res,'sala_'+code)
    })
  }

}
