import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validators: this.checkPass }
  );
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  checkPass(form: FormGroup) {
    const pw = form.get('password')?.value;
    const confirmPw = form.get('confirmPassword')?.value;
    if (pw === confirmPw) return null;
    return { passwordFail: true };
  }

  onHandleSubmit() {
    this.authService.signUp(this.signUpForm.value).subscribe({
      next: (data) => {
        this.errorMessage = '';
        this.router.navigate(['/signin']);
      },
      error: (err) => (this.errorMessage = err.error.message),
    });
  }
}
