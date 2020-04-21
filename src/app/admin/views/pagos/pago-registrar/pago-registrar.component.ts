import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-pago-registrar',
  templateUrl: './pago-registrar.component.html'
})
export class PagoRegistrarComponent {
  formPadre: FormGroup;
  constructor(){
    
  }

  guardarPagos(){

  }

}