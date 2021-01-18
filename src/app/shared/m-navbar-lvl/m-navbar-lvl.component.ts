import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'm-navbar-lvl',
  templateUrl: './m-navbar-lvl.component.html'
})
export class MNavbarLvlComponent implements OnInit {
  @Input() lvl : number = 0;
  @Input() enrollment_code : string = ""

  constructor(private authService:AuthService, private route:Router, private location:Location) { }

  ngOnInit(): void {
  }

  logoutStudent(){
    this.authService.studentLogout().subscribe(res=>{

      localStorage.removeItem('token')
      this.route.navigate(['sala'])

      console.log(res,"eliminado token")
    });
  }

  home(){
    this.location.back();
  }

}
