import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-docentes-create',
  templateUrl: './docentes-create.component.html'
})
export class DocentesCreateComponent implements OnInit {

  formDocente: FormGroup;
  guardarDocente() {
  }
  ngOnInit() {
  }


  constructor(private _formBuilder: FormBuilder, private _passwordValid: PasswordService) {
    this.crearDocente()
  }

  crearDocente() {
    this.formDocente = this._formBuilder.group({
      dniDocumento: ['', [Validators.required]],
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      apellido_pat: ['', [Validators.required, Validators.minLength(3)]],
      apellido_mat: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      celular: [''],
      fechaNac: ['', [Validators.required,]],
      sexo: ['', [Validators.required]],
      password1: ['', Validators.required ],
      password2: ['', [Validators.required,]]
    },
      {
        validators: this._passwordValid.validarPaswords("password1", "password2"),
      })
    console.log(this.formDocente)
  }
  // VALIDACIONES DEL FORMULARIO
  //NOMBRE VALIDAR
  get nombresValid() { return this.formDocente.get('nombres').valid }
  get nombresInvalid() { return this.formDocente.get('nombres').invalid && this.formDocente.get('nombres').touched }

  // APELLIDO VALIDAR 
  get apellidoPatValid() { return this.formDocente.get('apellido_pat').valid }
  get apellidoPatInvalid() { return this.formDocente.get('apellido_pat').invalid && this.formDocente.get('apellido_pat').touched }

  get apellidoMatValid() { return this.formDocente.get('apellido_mat').valid }
  get apellidoMatInvalid() { return this.formDocente.get('apellido_mat').invalid && this.formDocente.get('apellido_mat').touched }

  // VALIDAR CORREO
  get correoValid() { return this.formDocente.get('correo').valid }
  get correoInvalid() { return this.formDocente.get('correo').invalid && this.formDocente.get('correo').touched}

  // VALIDAR CELULAR
  get celularValid(){ return this.formDocente.get('celular').valid}
  // Celular es opcional
  /* get celularInvalid() { return this.formDocente.get('celular').invalid && this.formDocente.get('celular').touched} */

  //VALIDAR SEXO
  get sexoValid() { return this.formDocente.get('sexo').valid }
  get sexoInvalid() { return this.formDocente.get('sexo').invalid && this.formDocente.get('sexo').touched }

  //VALIDAR FECHAS
  get fechaNacValid() { return this.formDocente.get('fechaNac').valid }
  get fechaNacInvalid() { return this.formDocente.get('fechaNac').invalid && this.formDocente.get('fechaNac').touched }

  // DNI
  get dniDocumentoValid() { return this.formDocente.get('dniDocumento').valid }
  get dniDocumentoInvalid() { return this.formDocente.get('dniDocumento').invalid && this.formDocente.get('dniDocumento').touched }

  //VALIDAR CONTRASEÑAS
  get password1Valid() { return this.formDocente.get('password1').valid }
  get password1Invalid() { return this.formDocente.get('password1').invalid && this.formDocente.get('password1').touched }

  //CONFIRMAR PASSWORD 2
  get password2Valid() { return this.formDocente.get('password2').valid && this.formDocente.get('password2').touched }
  get password2Invalid() { return this.formDocente.get('password2').invalid && this.formDocente.get('password2').touched }

  get password2NoValido() {
    const password1 = this.formDocente.get('password1').value;
    const password2 = this.formDocente.get('password2').value;
    return (password1 === password2) ? false : true;
  }
  get passwordIgual() {
    const password1 = this.formDocente.get('password1').value;
    const password2 = this.formDocente.get('password2').value;
    return (password1 === password2) ? true : false;
  }









}
