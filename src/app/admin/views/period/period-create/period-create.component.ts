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
      bimestre1Period: ['', [Validators.requiredTrue]],
      bimestre2Period: ['', [Validators.requiredTrue]],
      bimestre3Period: ['', [Validators.requiredTrue]],
      bimestre4Period: ['', [Validators.requiredTrue]]
    })
  }
  get nombrePeriodValid() { return this.formPeriod.get('nombrePeriod').valid }
  get nombrePeriodInvalid() { return this.formPeriod.get('nombrePeriod').invalid && this.formPeriod.get('nombrePeriod').touched }

  get bimestre1PeriodValid() { return this.formPeriod.get('bimestre1Period').valid }
  get bimestre1PeriodInvalid() { return this.formPeriod.get('bimestre1Period').invalid && this.formPeriod.get('bimestre1Period').touched }

  get bimestre2PeriodValid() { return this.formPeriod.get('bimestre2Period').valid }
  get bimestre2PeriodInvalid() { return this.formPeriod.get('bimestre2Period').invalid && this.formPeriod.get('bimestre2Period').touched }

  get bimestre3PeriodValid() { return this.formPeriod.get('bimestre3Period').valid }
  get bimestre3PeriodInvalid() { return this.formPeriod.get('bimestre3Period').invalid && this.formPeriod.get('bimestre3Period').touched }

  get bimestre4PeriodValid() { return this.formPeriod.get('bimestre4Period').valid }
  get bimestre4PeriodInvalid() { return this.formPeriod.get('bimestre4Period').invalid && this.formPeriod.get('bimestre4Period').touched }



  ngOnInit() {
  }

}
