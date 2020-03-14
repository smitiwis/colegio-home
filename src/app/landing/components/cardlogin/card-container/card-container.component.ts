import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html'
})
export class CardContainerComponent implements OnInit {
  @Input() title: string;
  @Input() imgUrl: string;
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
