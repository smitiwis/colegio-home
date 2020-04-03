import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-cardlogin',
  templateUrl: './cardlogin.component.html'
})
export class CardloginComponent implements OnInit {

  tipoUser: any = {}
  constructor() { }

  ngOnInit() {
  }
  cards: any = [
    { title: 'ALUMNOS', src: '/assets/imgs/alumnocari.jpg', contenido: 'Informate sobre tu rendimiento y asistencia durante el periodo académico.' },
    { title: 'DOCENTES', src: '/assets/imgs/profesorcari.jpg', contenido: 'Registra los consolidados de cada estudiante, enviar comunicado de tareas durante el periodo académico.' },
    { title: 'PADRES', src: '/assets/imgs/papascari.jpg', contenido: 'Informate sobre la situación de su menor hijo: <br> - Evaluaciones <br> - Asistencias <br> - Comunicados' },
  ];



  soyCard(usuario: string) {
    var etiP = document.getElementById('textoP');
    etiP.innerHTML = (usuario);
    var luis = document.getElementById('radioUser');
    console.log(luis)

    this.tipoUser = {
      user: usuario
    }
    console.log(this.tipoUser)

  }






}
