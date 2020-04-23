import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-padres-create',
  templateUrl: './padres-create.component.html'
})
export class PadresCreateComponent {
  formPadre: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _passwordValid: PasswordService) {
    this.crearPadre();
  }
  guardarPadre() {
  }

  crearPadre() {
    this.formPadre = this._formBuilder.group({
      dniDocumento: ['', [Validators.required]],
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      apellido_pat: ['', [Validators.required, Validators.minLength(3)]],
      apellido_mat: ['', [Validators.required, Validators.minLength(3)]],
      celular: [''],
      fechaNac: ['', [Validators.required,]],
      sexo: ['', [Validators.required]],
      password1: ['', Validators.required],
      password2: ['', [Validators.required,]]
    },
      {
        validators: this._passwordValid.validarPaswords("password1", "password2"),
      })
    console.log(this.formPadre)
  }





  // VALIDACIONES DEL FORMULARIO
  //NOMBRE VALIDAR
  get nombresValid() { return this.formPadre.get('nombres').valid }
  get nombresInvalid() { return this.formPadre.get('nombres').invalid && this.formPadre.get('nombres').touched }

  // APELLIDO VALIDAR 
  get apellidoPatValid() { return this.formPadre.get('apellido_pat').valid }
  get apellidoPatInvalid() { return this.formPadre.get('apellido_pat').invalid && this.formPadre.get('apellido_pat').touched }

  get apellidoMatValid() { return this.formPadre.get('apellido_mat').valid }
  get apellidoMatInvalid() { return this.formPadre.get('apellido_mat').invalid && this.formPadre.get('apellido_mat').touched }

  // VALIDAR CELULAR
  get celularValid() { return this.formPadre.get('celular').valid }
  // Celular es opcional
  /* get celularInvalid() { return this.formPadre.get('celular').invalid && this.formPadre.get('celular').touched} */

  //VALIDAR SEXO
  get sexoValid() { return this.formPadre.get('sexo').valid }
  get sexoInvalid() { return this.formPadre.get('sexo').invalid && this.formPadre.get('sexo').touched }

  //VALIDAR FECHAS
  get fechaNacValid() { return this.formPadre.get('fechaNac').valid }
  get fechaNacInvalid() { return this.formPadre.get('fechaNac').invalid && this.formPadre.get('fechaNac').touched }

  // DNI
  get dniDocumentoValid() { return this.formPadre.get('dniDocumento').valid }
  get dniDocumentoInvalid() { return this.formPadre.get('dniDocumento').invalid && this.formPadre.get('dniDocumento').touched }

  //VALIDAR CONTRASEÑAS
  get password1Valid() { return this.formPadre.get('password1').valid }
  get password1Invalid() { return this.formPadre.get('password1').invalid && this.formPadre.get('password1').touched }

  //CONFIRMAR PASSWORD 2
  get password2Valid() { return this.formPadre.get('password2').valid && this.formPadre.get('password2').touched }
  get password2Invalid() { return this.formPadre.get('password2').invalid && this.formPadre.get('password2').touched }

  get password2NoValido() {
    const password1 = this.formPadre.get('password1').value;
    const password2 = this.formPadre.get('password2').value;
    return (password1 === password2) ? false : true;
  }
  get passwordIgual() {
    const password1 = this.formPadre.get('password1').value;
    const password2 = this.formPadre.get('password2').value;
    return (password1 === password2) ? true : false;
  }







}