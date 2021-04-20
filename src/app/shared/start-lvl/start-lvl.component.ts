import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'start-lvl',
  templateUrl: './start-lvl.component.html',
})
export class StartLvlComponent implements OnInit, AfterViewInit {
  @Input() score?: number = 0;
  @Input() color: string = 'white';
  classStyle: string = 'font-bold lg:text-lg md:text-md text-sm ';
  showScore: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.classStyle += ' text-' + this.color;
  }

  ngAfterViewInit() {
    //this.efectIncrementScore();
  }
  efectIncrementScore(): void {
    let interval = setInterval(() => {
      this.showScore += 1;
      if (this.showScore == this.score) {
        clearInterval(interval);
      }
    }, 50);
  }
}
