import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html'
})
export class CardModalComponent {

  @Input() title: string;

  constructor() {
  }


  iniciarSecion(valorDni, valorPass) {
    var etiquetaForm = document.getElementById('form');

    etiquetaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let usuarios: any = [{
        dni: valorDni.value,
        passowrd: valorPass.value
      }];
      localStorage.setItem('usuario', JSON.stringify(usuarios));
      location.href = '/admin';
     
    })
  }






}





