import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Logs } from 'src/app/interfaces/logs.interface';
import { Problem } from 'src/app/interfaces/problem.interface';
import { School } from 'src/app/interfaces/school.interface';
import { Student } from 'src/app/interfaces/student.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  domain:string = environment.domain;
  path = environment.path;
  constructor(private http:HttpClient) { }


  getInvitedStudents$(code:string){
    return this.http.get(this.domain+this.path.student.room+code);
  }

  //TOKEN
  postLevelsStudents$(){
    return this.http.get(this.domain+this.path.student.max_level);
  }
  //TOKEN
  postProgress$(level_id:number){
    return this.http.put<Logs>(this.domain+this.path.student.progress,{level_id:level_id});
  }
  //TOKEN
  postSaveLogForBlock(log:Logs){ // Almacena por cada bloque hecho
    return this.http.put<Logs>(this.domain+this.path.student.logs,log)
  }


  //TOKEN
  postResult(lvlnumber:number){
    return this.http.put(this.domain+this.path.student.result,{level_id:lvlnumber})
  }


  getAllSchools$(){
    return this.http.get<School[]>(this.domain+this.path.school.p);
  }

  //TOKEN
  getProblem$(lvlnumber:number,blocknumber:number){
    return this.http.get<Problem[]>(this.domain+this.path.student.problem+`${lvlnumber}/${blocknumber}`)
  }

}
