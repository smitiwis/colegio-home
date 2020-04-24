import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notas-registrar',
  templateUrl: './notas-registrar.component.html'
})
export class NotasRegistrarComponent implements OnInit {

  formDocente: FormGroup;
  guardarDocente() {
  }
  ngOnInit() {
  }

}
