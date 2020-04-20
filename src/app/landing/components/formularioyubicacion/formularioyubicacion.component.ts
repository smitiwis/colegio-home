import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularioyubicacion',
  templateUrl: './formularioyubicacion.component.html'
})
export class FormularioyubicacionComponent implements OnInit {
  formContacto: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.crearContacto();
  }

  ngOnInit() {
  }

  crearContacto() {
    this.formContacto = this._formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      comentario: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
    })
  }

  guardarContacto() {

  }

}