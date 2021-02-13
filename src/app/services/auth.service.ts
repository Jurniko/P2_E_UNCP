import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/student.interface';
import { Teacher } from '../interfaces/teacher.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain:string = environment.domain;
  path = environment.path;

  constructor(private http:HttpClient) { }

  postRegisterStudent$(data:Student){
    return this.http.put(this.domain+this.path.student.register,data)
  }

  //TOKEN
  studenLogin(studenLogin:{enrollment_code:string,nickname:string}){
    return this.http.put(this.domain+this.path.student.login,studenLogin).pipe(map((res:any)=>res.data));
  }
  //TOKEN
  studentInfo(){
    return this.http.get<Student>(this.domain+this.path.student.info)
  }
  //TOKEN
  studentLogout(){
    return this.http.get(this.domain+this.path.student.logout)
  }

  // ================================ TEACHER ========================

  //Rememember_me : boolean    ->  true = 1 semana , false = no pasa nada
  loginTeacher(teacherData:{email:string,password:string}){
    return this.http.put(this.domain+this.path.teacher.login,teacherData).pipe(map((e:any)=>e.data));
  }
  //TOKEN
  infoTeacher(){
    return this.http.get<Teacher>(this.domain+this.path.teacher.info)
  }

  logoutTeacher(){
    return this.http.get(this.domain+this.path.teacher.logout)
  }

  // ===================== TOKEN ==============================
  getToken(){
    return localStorage.getItem("token");
  }

}
