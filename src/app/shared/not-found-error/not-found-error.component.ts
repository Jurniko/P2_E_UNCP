import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.scss']
})
export class NotFoundErrorComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  go(path:string) {
    this.route.navigate([path])
  }
}
