import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student.interface';
import { Teacher } from 'src/app/interfaces/teacher.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
})
export class DocenteComponent implements OnInit{

  greet : boolean  = true;
  teacher : Teacher = {} as Teacher;
  constructor(private route:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.init$();
    this.greetActivated();
  }

  init$(){
    this.authService.infoTeacher().subscribe((res:Teacher)=>{
      this.teacher = res;
    })
  }

  greetActivated(){
    if(this.route.url == "/docente"){
      this.greet = true;
    }else{this.greet = false};
    this.route.events.subscribe((event:any) => {
      if(event instanceof NavigationStart) {
        if(event.url != "/docente"){
          this.greet = false;
        }
      }
    });
  }

  logoutTeacher(){
    this.authService.logoutTeacher().subscribe(res=>{

      localStorage.removeItem('token')
      this.route.navigate([`/login`])
    })
  }

  nextPage(path:string){
    this.route.navigate([`/docente/${path}`])
  }

  home(){
    this.route.navigate([`/docente`])
  }
}
