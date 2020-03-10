import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare global {
  interface Window { Glob: any; }
}
@Component({
  selector: 'app-preintranet',
  templateUrl: './preintranet.component.html',
})
export class PreintranetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const startSlider = window.Glob.startSlider;
    startSlider();
  }

}