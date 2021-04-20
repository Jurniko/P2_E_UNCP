import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DocenteService } from 'src/app/modules/docente/services/docente.service';
interface dataVerticalChart{
  ppms:dataFormat[]
  scores:dataFormat[]

}
interface dataFormat{
  name:string
    value:number
}

@UntilDestroy()
@Component({
  selector: 'modal-chart',
  templateUrl: './modal-chart.component.html',
})
export class ModalChartComponent implements OnInit {
  @Input() idData :any
  @Input() pathName : string = ""
  @Input() data : dataVerticalChart = {} as dataVerticalChart
  @Output() back : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private docenteService:DocenteService) { }

  ngOnInit(): void {
    this.generateHttp(this.pathName)
  }

  generateHttp(pathName:string){
    switch(pathName.toLocaleLowerCase()){
      case "individual":
        this.docenteService.chartIndividualStudent(this.idData.student_id, this.idData.attempt_id).pipe(untilDestroyed(this)).subscribe((res:any)=>{
          this.data = res ;
        })
        break;
      case "group":
         this.docenteService.chartGroupStudent(this.idData.code_id).pipe(untilDestroyed(this)).subscribe((res:any)=>{
          this.data = res ;
        })
        break;
    }
  }


}
