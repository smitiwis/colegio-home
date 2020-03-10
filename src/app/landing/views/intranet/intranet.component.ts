import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html'
})
export class IntranetComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private routerService: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
  }

  onSubmit() {
    this.routerService.navigate(['/admin']);
  }
}
