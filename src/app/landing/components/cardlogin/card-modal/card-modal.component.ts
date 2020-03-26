import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html'
})
export class CardModalComponent implements OnInit {

  @Input() title: string;
  loginForm: FormGroup;
  documentControl: AbstractControl;
  passwordControl: AbstractControl;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      document: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      password: ['', Validators.required],
    });

    this.documentControl = this.loginForm.controls.document;
    this.passwordControl = this.loginForm.controls.password;

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest = this.loginForm.value;
      this.authService.login(loginRequest)
        .subscribe((res) => {
          const res1 = {
            token: '123-wab3-c23423-344'
          };
          localStorage.setItem('token', res1.token);
          const mascaraModal: HTMLElement  = document.querySelector('.modal-backdrop') as HTMLElement;
          mascaraModal.remove();
          this.router.navigate(['/admin']);
        }, (err) => {
          const mascaraModal: HTMLElement  = document.querySelector('.modal-backdrop') as HTMLElement;
          mascaraModal.remove();
          this.router.navigate(['/admin/periodos']);
        });
    } else {
      return;
    }
  }

  iniciarSecion(valorDni, valorPass) {
    let etiquetaForm = document.getElementById('form');

    etiquetaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usuarios: any = [{
        dni: valorDni.value,
        passowrd: valorPass.value
      }];
      // localStorage.setItem('usuario', JSON.stringify(usuarios));
      // location.href = '/admin';

    });
  }






}





