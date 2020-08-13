import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  init = false;
  userName: string;
  constructor(private _router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.init = true
    this.userName = 'Avi Nessimian'
    }, 1000);

    
  }


}

