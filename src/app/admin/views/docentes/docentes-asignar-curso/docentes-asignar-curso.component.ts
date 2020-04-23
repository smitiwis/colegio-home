import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-docentes-asignar-curso',
  templateUrl: './docentes-asignar-curso.component.html'
})
export class DocentesAsignarCursoComponent implements OnInit {
  formAsginarCursoDocent: FormGroup;
  guardarAsigCursDocent() {

  }
  constructor(private _formBuilder: FormBuilder, private _passwordValid: PasswordService) {

    this.crearFormAsigCursDocent();
  }
  crearFormAsigCursDocent() {
    this.formAsginarCursoDocent = this._formBuilder.group({
      dniDocumento: [''],
    })
  }

  ngOnInit() {
  }

}
