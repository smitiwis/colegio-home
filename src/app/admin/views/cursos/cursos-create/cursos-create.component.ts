
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-create',
  templateUrl: './cursos-create.component.html'
})
export class CursosCreateComponent {
  formCurso: FormGroup;
  guardarCurso() {

  }
  constructor(private _formBuilder: FormBuilder) {
    this.crearCurso();
  }

  crearCurso() {
    this.formCurso = this._formBuilder.group({
      nombreCurs: ['', [Validators.required]],
      fechaRegistCurs: ['', [Validators.required]]
    })
  }

  get nombreCusoValid() { return this.formCurso.get('nombreCurs').valid }
  get nombreCusoInvalid() { return this.formCurso.get('nombreCurs').invalid && this.formCurso.get('nombreCurs').touched }

  get fechaRegistCursValid() { return this.formCurso.get('fechaRegistCurs').valid }
  get fechaRegistCursInvalid() { return this.formCurso.get('fechaRegistCurs').invalid && this.formCurso.get('fechaRegistCurs').touched }


}