import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Report } from 'src/app/interfaces/reports.inteface';
import { DocenteService } from '../../../services/docente.service';

@Component({
  selector: 'app-resultado-level',
  templateUrl: './resultado-level.component.html',
})
export class ResultadoLevelComponent implements OnInit {

  studentId : number = 1;
  result : Report = {} as Report;

  hiddenLevel1:boolean = false;
  hiddenLevel2:boolean = false;
  hiddenLevel3:boolean = false;

  constructor(private route : Router, private docenteSevice:DocenteService, private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((param:Params)=>{
      this.studentId = param.id
      console.log(param)
      this.init$();
    })

  }
  
  init$(){
    this.docenteSevice.getStudentsById(this.studentId).subscribe((res:any)=>{
      this.result = res
      console.log(this.result)
    })
  }


}