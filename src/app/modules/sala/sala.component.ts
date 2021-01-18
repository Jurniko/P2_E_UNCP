import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SalaService } from './services/sala.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
})
export class SalaComponent implements OnInit {
  form :FormGroup = new FormGroup({}) ;
  hasAccount : boolean = false;

  existCode : boolean = true;

  existStudent : boolean = true;
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
    switch(type){
      case "room":
        let code = this.form.get('code')?.value
        this.salaService.getInvitedStudents$(code).subscribe(res=>{
          this.route.navigate(["/sala/"+code])
        },(err)=>{
          this.existCode = false;
        })
        break;
      case "account":
        console.log(this.form.value)
        this.authService.studenLogin(this.form.value).subscribe((res:any)=>{
          console.log("resssss, ingresando",res)
          localStorage.setItem('token',res.token)
          this.route.navigate(["/sala/"+res.student.code.code+"/lvl"])
        }, err=>{
            this.existStudent = false
        })

        break;
    }
  }

}
