import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student.interface';
import { DocenteService } from '../../services/docente.service';
import { downloadFile } from 'src/app/utils/downloadFile.utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-estudiantes-test',
  templateUrl: './estudiantes-test.component.html'
})
export class EstudiantesTestComponent implements OnInit {
  searching :string = ''
  current:any;
  students : Student[] = [] as Student[];
  constructor(private docenteService:DocenteService, private route:Router) { }


  ngOnInit(): void {
    this.init$();
  }

  init$(){
    this.docenteService.getAllStudents().pipe(untilDestroyed(this)).subscribe((res:Student[])=>{
      this.students = res;
    })
  }

  checkStudent(id:number){
    this.route.navigate(['/docente/estudiantes/'+id]);
  }

  dStudentExcel(){
    this.docenteService.downloadStudentsExcel().pipe(untilDestroyed(this)).subscribe((res:any)=>{
      downloadFile(res,'estudiantes_registrados')
  })
  }
}
