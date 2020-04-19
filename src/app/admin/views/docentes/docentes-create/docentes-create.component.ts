import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-docentes-create',
  templateUrl: './docentes-create.component.html'
})
export class DocentesCreateComponent implements OnInit {

  formDocente: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _passwordServis: PasswordService) {
    this.crearDocente()
  }

  crearDocente() {
    this.formDocente = this._formBuilder.group({
      nombreDoc: ['', [Validators.required, Validators.minLength(3)]],
      apellidoDoc: ['', [Validators.required, Validators.minLength(5)]],
      periodoAcad: ['', [Validators.required, Validators.minLength(5)]],
      fechaNacDoc: ['', [Validators.required]],
      documentoDniDoc: ['', [Validators.required,]],
      passoword1Doc: ['', [Validators.required, Validators.minLength(5)]],
      passoword2Doc: ['', [Validators.required]]
    },
      {
        validators: this._passwordServis.validarPaswords("passoword1Doc", "passoword2Doc"),
      })

  }
  // VALIDAR NOMBRE
  get nombreDocValid() {
    return this.formDocente.get('nombreDoc').valid
  }
  get nombreDocInvalid() {
    return this.formDocente.get('nombreDoc').invalid && this.formDocente.get('nombreDoc').touched;
  }
  //VALIDAR APELLIDOS
  get apellidoDocValid() {
    return this.formDocente.get('apellidoDoc').valid
  }
  get apellidoDocInvalid() {
    return this.formDocente.get('apellidoDoc').invalid && this.formDocente.get('apellidoDoc').touched;
  }
  //VALIDACIONES PARA EL PERIODO ACADEMICO
  get periodoAcadValid() {
    return this.formDocente.get('periodoAcad').valid
  }
  get periodoAcadInvalid() {
    return this.formDocente.get('periodoAcad').invalid && this.formDocente.get('periodoAcad').touched;
  }
  //VALIDACIONES DE FECHAS
  get fechaNacDocValid() {
    return this.formDocente.get('fechaNacDoc').valid
  }
  get fechaNacDocInvalid() {
    return this.formDocente.get('fechaNacDoc').invalid && this.formDocente.get('fechaNacDoc').touched;
  }
  // VALIDAR EL DNI DEL DOCENTE
  get documentoDniDocValid() {
    return this.formDocente.get('documentoDniDoc').valid
  }
  get documentoDniDocInvalid() {
    return this.formDocente.get('documentoDniDoc').invalid && this.formDocente.get('documentoDniDoc').touched;
  }
  //VALIDAR CONTRASEÑAS
  get passoword1DocValid() {
    return this.formDocente.get('passoword1Doc').valid;
  }
  get passoword1DocInvalid() {
    return this.formDocente.get('passoword1Doc').invalid && this.formDocente.get('passoword1Doc').touched;
  }
  //CONFIRMAR PASSWORD 2
  get passoword2DocValid() {
    return this.formDocente.get('passoword2Doc').valid && this.formDocente.get('passoword2Doc').touched;
  }
  get passoword2DocInvalid() {
    return this.formDocente.get('passoword2Doc').invalid && this.formDocente.get('passoword2Doc').touched;
  }
  get password2NoValido() {
    const password1 = this.formDocente.get('passoword1Doc').value;
    const password2 = this.formDocente.get('passoword2Doc').value;
    return (password1 === password2) ? false : true;
  }
  get passwordIgual() {
    const password1 = this.formDocente.get('passoword1Doc').value;
    const password2 = this.formDocente.get('passoword2Doc').value;
    return (password1 === password2) ? true : false;
  }
  guardarDocente() {


  }




  ngOnInit() {
  }

}
