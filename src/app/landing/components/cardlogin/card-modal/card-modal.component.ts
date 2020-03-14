import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html'
})
export class CardModalComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
  capturarTexto(){
    var textoP = document.getElementById("textoP");
    console.log(textoP);
  }

}





