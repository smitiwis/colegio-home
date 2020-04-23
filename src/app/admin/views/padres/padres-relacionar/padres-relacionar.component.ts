import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-padres-relacionar',
  templateUrl: './padres-relacionar.component.html'
})
export class PadresRelacionarComponent implements OnInit {
  formParentesco: FormGroup;
  guardarParentesco() {

  }
  constructor(private _formBuilder: FormBuilder) {
    this.darParentesco();
  }
  darParentesco() {
    this.formParentesco = this._formBuilder.group({
      dniDocumento: ['']
    });
  }

  ngOnInit() {
  }

}
