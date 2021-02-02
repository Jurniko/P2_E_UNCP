import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Logs } from 'src/app/interfaces/logs.interface';
import { Problem } from 'src/app/interfaces/problem.interface';
import { extractCorrectAternatives } from 'src/app/utils/extractCorrectAlternatives.utils';
import { randomProblemBg } from 'src/app/utils/radomProblemBg.utils';
import { randomQuestionBg } from 'src/app/utils/randomQuestionBg.utils';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'bloque-vid',
  templateUrl: './bloque-vid.component.html'
})
export class BloqueVidComponent implements OnInit {
  vid : boolean = true;
  finishedVid : boolean = false
  problem : Problem = {} as Problem;
  questions:boolean = false ;
  apreciation : boolean = false;

  form : FormGroup = new FormGroup({});

  intervalFunction : any
  timeInSeconds : number = 0

  @Input() level : number = 1 ;
  @Input() state_key : string= '' ;
  block : number = 2 ;

  // =========== IMAGEN ===========
  randomBgQuestion : string = randomQuestionBg();
  randomBgProblem : string = randomProblemBg();

  @Output() finishedVidData : EventEmitter<Logs> = new EventEmitter<Logs>()
  constructor(private salaService : SalaService, private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.init$();
    this.startRecordingTime();
  }


  init$(){
    this.salaService.getProblem$(this.level,this.block).subscribe((res: Problem[])=>{
      this.problem = res[0]
      if(res[0].questions.length == 3){
        this.form = this.formBuilder.group({
          question1:[,Validators.required],
          question2:[,Validators.required],
          question3:[,Validators.required],
          appreciation:[]
        })
      }else{
        this.form = this.formBuilder.group({
          question1:[,Validators.required],
          question2:[,Validators.required],
          question3:[,Validators.required],
          question4:[,Validators.required],
          appreciation:[]
        })
      }
    })
  }

  startRecordingTime(){
    this.intervalFunction = setInterval(()=>{
      this.timeInSeconds += 1;
      this.timeInSeconds = +(this.timeInSeconds.toFixed(2));
    },1000)
  }

  stopRecordingTime(){
    clearInterval(this.intervalFunction);
  }

  onSubmit(){
    this.stopRecordingTime();
    let logs : Logs = {} as Logs;
    logs.block_id = this.block;
    logs.level_id = this.level;
    logs.ppm = null;
    logs.state_key = this.state_key;
    logs.correct_questions_id = extractCorrectAternatives(this.problem.questions,this.form.value)
    logs.duration = this.timeInSeconds
    logs.problem_id = this.problem.id ;
    logs.appreciation = this.form.get('appreciation')?.value;
    this.finishedVidData.emit(logs);
  }


}
