import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from 'src/app/services/auth.service';


@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  error : boolean = false;
  constructor(private formBuilder : FormBuilder,private authService : AuthService, private route:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    this.authService.loginTeacher(this.form.value).pipe(untilDestroyed(this)).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      this.route.navigate(['/docente']);

    },err=>{
      this.error =true;
    })
  }
  back(){
    this.route.navigate([''])
  }

}
