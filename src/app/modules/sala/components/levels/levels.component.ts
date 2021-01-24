import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student.interface';
import { AuthService } from 'src/app/services/auth.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html'
})
export class LevelsComponent implements OnInit {

  maxLevel :number = 0 ;

  studentData:Student = {} as Student;

  styleEnabled ={
    css: "rounded bg-green-400 hover:bg-green-300 py-4 lg:px-8 md:px-6 px-4 text-white text-xl font-semibold tracking-wider flex justify-between items-center w-full shadow-xl lg:my-4 md:my-2 my-1",
    svg: "assets/sala/unlocked.svg"
  }
  styleDisabled={
    css: "rounded bg-green-600                    py-4 lg:px-8 md:px-6 px-4 text-white text-xl font-semibold  tracking-wider flex justify-between items-center w-full shadow-xl lg:my-4 md:my-2 my-1",
    svg: "assets/sala/locked.svg"
  }

  constructor(private salaService:SalaService, private route:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.init$();
  }

  init$(){
    this.salaService.postLevelsStudents$().subscribe((res:any)=>{
      if(!res){
        this.maxLevel = 0;
      }else{
        this.maxLevel = res
      }
    })

    this.authService.studentInfo().subscribe(res=>this.studentData = res)
  }

  goLevel(level:number){
    this.route.navigate([this.route.url+`/${level}`])
  }

}
