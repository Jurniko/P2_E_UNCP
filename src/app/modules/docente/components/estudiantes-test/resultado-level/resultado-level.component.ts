import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Report } from 'src/app/interfaces/reports.inteface';
import { DocenteService } from '../../../services/docente.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
  hiddenForAttempt : boolean[] = [false];
  openModalDetails:boolean = false;
  detailsProblem :{problem:string,appreciation:string,questions:{question:string,correct:boolean}[]}[]= [] as any;


  idDataChart = {student_id : 0, attempt_id:0}
  openChart : boolean = false
  constructor(private route : Router, private docenteSevice:DocenteService, private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.pipe(untilDestroyed(this)).subscribe((param:Params)=>{
      this.studentId = param.id
      this.init$();
    })
  }

  init$(){
    this.docenteSevice.getStudentsById(this.studentId).pipe(untilDestroyed(this)).subscribe((res:any)=>{
      this.result = res
      this.hiddenForAttempt = this.generateIdHiddenForAttempt(this.result.attempts.length);
    })
  }

  generateIdHiddenForAttempt(length:number) : boolean[]{
    let levelVar :boolean[] = [] as boolean[];
    for(let i = 0 ; i<length ; i++){
      levelVar.push(false)
    }
    return levelVar;
  }
  details(stateKey:string){
    this.docenteSevice.detailsBlockStudent(stateKey).pipe(untilDestroyed(this)).subscribe((res:any)=>{
      this.detailsProblem = res;
      this.openModalDetails = true;
    })
  }

  isEmpty(attemp:any, level : string){
    if(attemp["level_"+level].length == 0){
      return true;
    }else{
      return false;
    }
  }
  generateChart(student_id:number,attempt_id:number){
    this.idDataChart.student_id = student_id;
    this.idDataChart.attempt_id = attempt_id;
    this.openChart = true;
  }
}
