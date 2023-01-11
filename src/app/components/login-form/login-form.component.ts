import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [],
})
export class LoginFormComponent {
  loginForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private location: Location) {}

  login() {
    console.log('login');
  }
}
