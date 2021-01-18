import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/interfaces/school.interface';
import { AuthService } from 'src/app/services/auth.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  codigoSala : string = "" ;
  next : boolean = false ;
  form : FormGroup = new FormGroup({});
  semesters :{}[] = [{}]
  schools :any

  success = { invited:true, error:false, message:"" }

  invitedStudents : string[] = [];
  constructor( private rutaActiva:ActivatedRoute, private formBuilder : FormBuilder, private salaService:SalaService, private route:Router, private authService:AuthService, private location:Location) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(param=>{
      this.codigoSala = param.codigo;
      this.salaService.getInvitedStudents$(this.codigoSala).subscribe((res:any)=>{
        this.invitedStudents = res;
        console.log(this.invitedStudents)
      })
    })

    this.form = this.formBuilder.group({
      code:[this.codigoSala],
      enrollment_code:['',Validators.required],
      nickname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      school_id:['',Validators.required],
      semester:['',Validators.required]
    })
    this.semesters = this.generateSemesters();
    this.allSchools$();
  }

  allSchools$(){
    this.salaService.getAllSchools$().subscribe((res:School[])=>{
      let newSchools : any[] =[] ; // forma [{}]
        res.map((e:any)=>{
          e["name"] = "school";
          newSchools.push(e)
        })

        this.schools = newSchools;
    });
  }

  onSubmit(){
    //this.route.navigateByUrl("/sala/"+this.codigoSala +"/lvl")
    let isCorrect = false;
    for(let invitationCode of this.invitedStudents){
      if(invitationCode  == this.form.get('enrollment_code')?.value){
        isCorrect = true;
        break;
      }
    }
    if( isCorrect ){
      console.log("a")
      this.authService.postRegisterStudent$(this.form.value).subscribe((res:any)=>{
        console.log(res,"estudiante creado ",res.token)
        localStorage.setItem("token",res.token)

        this.route.navigate([`/sala/${this.codigoSala}/lvl`])
      },err=>{
        this.success.error= true;
        if(err.status=422){
          this.success.message="Ya se ha creado una cuenta con este código de matricula."
        }else{
          this.success.message="Algo salio mal. Intente de nuevo."
        }

      })
    }else{
      this.success.invited = false;
       this.success.message="El código ingresado no pertenece a esta sala. Intente de nuevo."
    }

  }
  back(){
    this.location.back();
  }
  generateSemesters() : {}[]{
    return [
      {semester:"I",id:1, name:"semester"},
      {semester:"II",id:1, name:"semester"},
      {semester:"III",id:1, name:"semester"},
      {semester:"IV",id:1, name:"semester"},
      {semester:"V",id:1, name:"semester"},
      {semester:"VI",id:1, name:"semester"},
      {semester:"VII",id:1, name:"semester"},
      {semester:"VIII",id:1, name:"semester"},
      {semester:"IX",id:1, name:"semester"},
      {semester:"X",id:1, name:"semester"},
    ]
  }


}
