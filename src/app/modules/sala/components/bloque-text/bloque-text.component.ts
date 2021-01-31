import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logs } from 'src/app/interfaces/logs.interface';
import { Problem } from 'src/app/interfaces/problem.interface';
import { extractCorrectAternatives } from 'src/app/utils/extractCorrectAlternatives.utils';
import { randomProblemBg } from 'src/app/utils/radomProblemBg.utils';
import { randomQuestionBg } from 'src/app/utils/randomQuestionBg.utils';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'bloque-text',
  templateUrl: './bloque-text.component.html'
})
export class BloqueTextComponent implements OnInit{

  openResult:boolean = false ;
  textFinished:boolean = false;

  questions :boolean = false ;
  isListening : boolean = false ;

  ppmValue$ : number = 0 ;
  succesfulRead$ : boolean = false;

  form:FormGroup = new FormGroup({})

  intervalFunction : any
  timeInSeconds : number = 0

  randomBgQuestion : string = randomQuestionBg();

  randomBgProblem : string = randomProblemBg();
  @Output() finishedTextData : EventEmitter<Logs> = new EventEmitter<Logs>();

  @Input() level : number = 1 ;
  block : number = 1 ;
  problem : Problem = {body:"Cargando..."} as Problem;

  constructor( private salaService:SalaService, private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.init$();
    this.form = this.formBuilder.group({
      question1:[,Validators.required],
      question2:[,Validators.required],
      question3:[,Validators.required],
      question4:[,Validators.required],
    })
    this.startRecordingTime();

  }

  init$(){
    this.salaService.getProblem$(this.level,this.block).subscribe(res=>this.problem = res[0])
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


  succesfulRead(status:boolean ) {
    this.succesfulRead$ = status;
  }
  onSubmit(){
    let logs : Logs = {} as Logs;
    this.stopRecordingTime();
    logs.correct_questions_id = extractCorrectAternatives(this.problem.questions, this.form.value);

    logs.duration = this.timeInSeconds
    logs.ppm = this.ppmValue$;
    logs.block_id = this.block ;
    logs.level_id = this.level ;
    logs.problem_id = this.problem.id ;

    this.finishedTextData.emit(logs)

  }




}
