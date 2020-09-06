import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSubmitted: boolean = false;
  loginForm: FormGroup;
  hasError: boolean = false;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addLoginForm();
  }

  addLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onFormSubmit({ value, valid }) {
    this.formSubmitted = true;
    if (!valid) {
      return;
    }

    this.authService.login(value).subscribe(
      (data: any) => {
        this.hasError = false;
        this.authService.setToken(data.tokens.access.token);
        this.router.navigateByUrl('/user/dashboard');
      },
      (error) => {
        this.hasError = true;
        this.errorMsg = error.statusText;
      }
    );
  }
}
