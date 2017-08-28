import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css']
})
export class MainPageComponent implements OnInit {

  ngOnInit(): void {
    console.log('main page component initialized');
  }
}