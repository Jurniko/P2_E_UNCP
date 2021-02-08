import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Logs } from 'src/app/interfaces/logs.interface';
import { Problem } from 'src/app/interfaces/problem.interface';
import { extractCorrectAternatives } from 'src/app/utils/extractCorrectAlternatives.utils';
import { randomProblemBg } from 'src/app/utils/radomProblemBg.utils';
import { randomQuestionBg } from 'src/app/utils/randomQuestionBg.utils';
import { removeStorageResult } from 'src/app/utils/storageResult.utils';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'bloque-text',
  templateUrl: './bloque-text.component.html'
})
export class BloqueTextComponent implements OnInit,OnDestroy{

  openResult:boolean = false ;
  textFinished:boolean = false;

  apreciation:boolean = false;

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
      appreciation:[]
    })
    this.startRecordingTime();

  }
  ngOnDestroy(){
   console.log("TEMINAMOS EL BLOQUE 1")
    removeStorageResult();
  }

  init$(){
    this.salaService.getProblem$(this.level,this.block).subscribe(res=>this.problem = res[0])
  }

  usingAttempt(){
    this.textFinished = false;
    this.openResult = false;
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

  extraPoints(points:number){
    this.form.addControl('ppm_points',new FormControl(points))
    console.log(this.form.get('ppm_points')?.value)
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
    logs.appreciation = this.form.get('appreciation')?.value
    logs.ppm_points = this.form.get('ppm_points')?.value
    this.finishedTextData.emit(logs)

  }




}
