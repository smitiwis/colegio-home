import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-alumnos-matricular',
    templateUrl: './alumnos-matricular.component.html'
})
export class AlumnosMatricularComponent implements OnInit {
    formAlumnoMatricula: FormGroup;
    matricularAlumno() {

    }

    constructor(private _formBuilder: FormBuilder) {
        this.registrarMatricula();
    }
    registrarMatricula() {
        this.formAlumnoMatricula = this._formBuilder.group({
            dniDocumento: ['']
        });
    }
    ngOnInit() {
    }
}