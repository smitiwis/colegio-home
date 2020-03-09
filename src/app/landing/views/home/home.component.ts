import { Component, OnInit } from '@angular/core';
declare global {
  interface Window { Glob: any; }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const startSlider = window.Glob.startSlider;
    startSlider();
  }

}