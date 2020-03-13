import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare global {
  interface Window { Glob: any; }
}
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  
}