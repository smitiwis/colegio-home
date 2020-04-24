import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-period-create',
  templateUrl: './period-create.component.html'
})
export class PeriodCreateComponent implements OnInit {
  formPeriod: FormGroup;
  crearPeriod() {

  }
  constructor(private _formBuilder: FormBuilder) {
    this.registrarPeriod();
  }

  registrarPeriod() {
    this.formPeriod = this._formBuilder.group({
      nombrePeriod: ['', [Validators.required, Validators.minLength(4)]],
    })
  }
  get nombrePeriodValid() { return this.formPeriod.get('nombrePeriod').valid }
  get nombrePeriodInvalid() { return this.formPeriod.get('nombrePeriod').invalid && this.formPeriod.get('nombrePeriod').touched }




  ngOnInit() {
  }

}
