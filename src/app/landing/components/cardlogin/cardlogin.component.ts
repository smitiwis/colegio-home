import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlogin',
  templateUrl: './cardlogin.component.html'
})
export class CardloginComponent implements OnInit {
  cards: any = [
    {title: 'alumno', src: '/assets/imgs/alumnocari.jpg', contenido: 'Informate sobre tu rendimiento y asistencia durante el periodo académico.'},
    {title: 'docente', src: '/assets/imgs/profesorcari.jpg', contenido: 'Registra los consolidados de cada estudiante, enviar comunicado de tareas durante el periodo académico.'},
    {title: 'padres', src: '/assets/imgs/papascari.jpg', contenido: 'Informate sobre la situación de su menor hijo: <br> - Evaluaciones <br> - Asistencias <br> - Comunicados'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
