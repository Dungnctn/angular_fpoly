import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onHandleSubmit() {
    // console.log('form Submit', this.authForm.value);
    this.authService.signIn(this.authForm.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('user', JSON.stringify(data));
        if (data.user.role === 0) {
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => console.log('err', err),
    });
  }
}
