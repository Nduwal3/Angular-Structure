import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../@core/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  formSubmitted: Boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.addSignupForm();
  }

  addSignupForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required],
    });
  }

  onFormSubmit({ value, valid, ...rest }) {
    this.formSubmitted = true;
    console.log(rest);
    console.log(value);
    // if (!valid) return;
    this.authService.Register(value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //  get signup form controls
  get signupValue() {
    return this.signupForm.controls;
  }
}
