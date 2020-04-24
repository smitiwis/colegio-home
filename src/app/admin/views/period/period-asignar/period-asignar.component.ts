import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-period-asignar',
    templateUrl: './period-asignar.component.html'
})
export class PeriodAsignarComponent {
    formPeriodAsign: FormGroup;
    crearPeriod() {

    }
    constructor(private _formBuilder: FormBuilder) {
        
    }
}