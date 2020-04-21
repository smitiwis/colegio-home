import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-padres-create',
  templateUrl: './padres-create.component.html'
})
export class PadresCreateComponent {
  formPadre: FormGroup;
  constructor(){
    
  }

  guardarPadre(){

  }

}