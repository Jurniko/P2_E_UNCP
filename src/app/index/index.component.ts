import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {


  constructor(private route:Router){}

  ngOnInit(): void {
  }

  start(){
    this.route.navigate(['sala'])
  }
}
