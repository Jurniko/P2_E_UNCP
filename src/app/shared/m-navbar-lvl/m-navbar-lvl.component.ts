import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from 'src/app/services/auth.service';

@UntilDestroy()
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
    this.authService.studentLogout().pipe(untilDestroyed(this)).subscribe(res=>{

      localStorage.removeItem('token')
      this.route.navigate(['sala'])

    });
  }

  home(){
    if( this.route.url.split('/').length != 4  ){
      this.location.back();
    }
  }

}
