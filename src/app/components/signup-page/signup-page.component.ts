import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  usercreds = {
    email: '',
    password: '',
    photoURL: ''
  };
  constructor(private auth: AuthService) {
  }

  emailFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);
  passwordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }
  createAccount() {
    this.auth.signUp(this.usercreds);
  }
}
