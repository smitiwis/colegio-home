import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/admin/shared/services/validaciones/passowrd.service';

@Component({
  selector: 'app-alumnos-create',
  templateUrl: './alumnos-create.component.html'
})
export class AlumnosCreateComponent implements OnInit {
  formAlumno: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _passwordValid:PasswordService){ 
    this.crearAlumno();
  }
  crearAlumno(){
    this.formAlumno = this._formBuilder.group({
      nombre: ['',[ Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      apellido: ['', [Validators.required, Validators.minLength(5)] ],
      periodoAcad: ['', [Validators.required, Validators.minLength(4)] ],
      nivelAcad: ['', [Validators.required,] ],
      fechaNac: ['', [Validators.required,] ],
      dniDocumento: ['', [Validators.required,] ],
      password1: ['', [Validators.required,Validators.minLength(3)] ],
      password2: ['', [Validators.required,] ]
    },
    {
      validators: this._passwordValid.validarPaswords("password1", "password2"),
    })
    console.log(this.formAlumno)
  }
// VALIDACIONES DEL FORMULARIO
//NOMBRE VALIDAR
get nombreAlumValid(){
return this.formAlumno.get('nombre').valid
}
get nombreAlumInvalid(){
  return this.formAlumno.get('nombre').invalid && this.formAlumno.get('nombre').touched
}
get apellAlumValid(){
  return this.formAlumno.get('apellido').valid
}
get apellAlumInvalid(){
  return this.formAlumno.get('apellido').invalid && this.formAlumno.get('apellido').touched
}

get nivelAcadValid(){
  return this.formAlumno.get('nivelAcad').valid
}
get nivelAcadInvalid(){
  return this.formAlumno.get('nivelAcad').invalid && this.formAlumno.get('nivelAcad').touched;
}

get periodoAcadValid(){
  return this.formAlumno.get('periodoAcad').valid
}
get periodoAcadInvalid(){
  return this.formAlumno.get('periodoAcad').invalid && this.formAlumno.get('periodoAcad').touched;
}

get fechaNacValid(){
  return this.formAlumno.get('fechaNac').valid
}
get fechaNacInvalid(){
  return this.formAlumno.get('fechaNac').invalid && this.formAlumno.get('fechaNac').touched;
}
// DNI

get dniDocumentoValid() {
  return this.formAlumno.get('dniDocumento').valid
}
get dniDocumentoInvalid() {
  return this.formAlumno.get('dniDocumento').invalid && this.formAlumno.get('dniDocumento').touched;
}


//VALIDAR CONTRASEÑAS
get password1Valid() {
  return this.formAlumno.get('password1').valid;
}
get password1Invalid() {
  return this.formAlumno.get('password1').invalid && this.formAlumno.get('password1').touched;
}

//CONFIRMAR PASSWORD 2
get password2Valid() {
  return this.formAlumno.get('password2').valid && this.formAlumno.get('password2').touched;
}
get password2Invalid() {
  return this.formAlumno.get('password2').invalid && this.formAlumno.get('password2').touched;
}

get password2NoValido() {
  const password1 = this.formAlumno.get('password1').value;
  const password2 = this.formAlumno.get('password2').value;
  return (password1 === password2) ? false : true;
}
get passwordIgual() {
  const password1 = this.formAlumno.get('password1').value;
  const password2 = this.formAlumno.get('password2').value;
  return (password1 === password2) ? true : false;
}

  guardarAlumno() {
    
  }
  

  ngOnInit() {
  }





}
