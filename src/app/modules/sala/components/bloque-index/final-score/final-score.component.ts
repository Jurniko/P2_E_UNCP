import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SalaService } from '../../../services/sala.service';

@Component({
  selector: 'modal-final-score',
  templateUrl: './final-score.component.html',
})
export class FinalScoreComponent implements OnInit {
  @Input() level : number = 1;
  @Output() finished : EventEmitter<boolean> = new EventEmitter<boolean>()

  block_1:number = 0;
  block_2:number = 0;
  average:number = 0;
  constructor(private salaService:SalaService) { }

  ngOnInit(): void {
    this.init$()

  }

  init$(){
  this.salaService.postResult(this.level).subscribe((res:any)=>{
      this.block_1 = res.block_1;
      this.block_2 = res.block_2;
      this.average = res.average
      console.log(res)
    })
  }
}
