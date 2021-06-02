import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SalaService } from './services/sala.service';

@UntilDestroy()
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
})
export class SalaComponent implements OnInit {
  form :FormGroup = new FormGroup({}) ;
  hasAccount : boolean = false;

  existCode : boolean = true;

  existStudent : boolean = true;

  openIndications :boolean = false;
  constructor(private formBuilder : FormBuilder,private route:Router, private salaService:SalaService, private authService:AuthService) { }

  ngOnInit(): void {
    this.changeStatus(this.hasAccount)
  }

  changeStatus(value:boolean){
    this.hasAccount = value;
    if(this.hasAccount){
      this.form = this.formBuilder.group({
        enrollment_code:['',Validators.required],
        nickname:['',Validators.required]
      })

    }else{
      this.form =  this.formBuilder.group({
        code:['',[Validators.required]]

      })
    }
  }

  exit(){
    this.route.navigateByUrl("/")
  }

  onSubmit(type:string) : void{
    let formValue = this.form.value
    switch(type){
      case "room":
        let code = formValue.code
        this.salaService.getInvitedStudents$(code).pipe(untilDestroyed(this)).subscribe(res=>{
          this.route.navigate(["/sala/"+code])
        },(err)=>{
          this.existCode = false;
        })
        break;
      case "account":
        formValue.nickname = formValue.nickname.toLowerCase()
        this.authService.studenLogin(formValue).pipe(untilDestroyed(this)).subscribe((res:any)=>{
          localStorage.setItem('token',res.token)
          this.route.navigate(["/sala/"+res.student.code.code+"/lvl"])
        }, err=>{
            this.existStudent = false
        })

        break;
    }
  }

}
