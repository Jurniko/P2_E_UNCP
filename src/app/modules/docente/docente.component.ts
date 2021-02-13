import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { pipe } from 'rxjs';
import { Student } from 'src/app/interfaces/student.interface';
import { Teacher } from 'src/app/interfaces/teacher.interface';
import { AuthService } from 'src/app/services/auth.service';


@UntilDestroy()
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
    this.authService.infoTeacher().pipe(untilDestroyed(this)).subscribe((res:Teacher)=>{
      this.teacher = res;
    })
  }

  greetActivated(){
    if(this.route.url == "/docente"){
      this.greet = true;
    }else{this.greet = false};
    this.route.events.pipe(untilDestroyed(this)).subscribe((event:any) => {
      if(event instanceof NavigationStart) {
        if(event.url != "/docente"){
          this.greet = false;
        }
      }
    });
  }

  logoutTeacher(){
    this.authService.logoutTeacher().pipe(untilDestroyed(this)).subscribe(res=>{
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
