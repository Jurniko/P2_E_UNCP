import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logs } from 'src/app/interfaces/logs.interface';
import { Student } from 'src/app/interfaces/student.interface';
import { AuthService } from 'src/app/services/auth.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'bloque-index',
  templateUrl: './bloque-index.component.html'
})
export class BloqueIndexComponent implements OnInit {

  firstBlockAvailable: boolean = true;
  secondBlockAvailable: boolean = false;
  finalScore : boolean = false;


  level : number = 1;
  log: Logs  = {} as Logs;

  stateKeyGenerated : string = "";

  studentData: Student = {} as Student;

  constructor(private salaService:SalaService, private rutaActiva:ActivatedRoute, private _location:Location,private authService:AuthService) { }

  ngOnInit(): void {
    this.getLvlOfRoute();
    this.init$();
  }

  init$(){
    this.salaService.postProgress$(this.level).subscribe((res:Logs)=>{//!! Como parametro va en estudiante
      this.log = res

      if(res.state_key != "" || res.state_key ){
        this.stateKeyGenerated = res.state_key
      }
      if(!res){ // si es nulo
        this.firstBlockAvailable = true;
        this.secondBlockAvailable = false;
      }
      else{
        if(this.log.block_id == 1){ // Terminó el primer Bloque
          this.firstBlockAvailable = false;
          this.secondBlockAvailable = true;
          this.finalScore = false;
        }
        else if(this.log.block_id == 2){ // Terminó el segundo Bloque
          this.firstBlockAvailable = true;
          this.secondBlockAvailable = false;
          this.finalScore = false;
        }
      }
    })

    this.authService.studentInfo().subscribe(res=>{
      this.studentData = res;
    })
  }

  getLvlOfRoute(){

    this.rutaActiva.params.subscribe(param=>{
      this.level = +param.lvl;
    })
  }

  blockTextData(logs:Logs){
    this.salaService.postSaveLogForBlock(logs).subscribe((res:Logs)=>{
      console.log("blockTExt ",res)
        this.stateKeyGenerated = res.state_key;
    })
  }

  blockVidData(logs:Logs){
    this.salaService.postSaveLogForBlock(logs).subscribe(res=>{
  })
  }

  finished(value:boolean){
    this._location.back(); // !! FIX
  }

}
