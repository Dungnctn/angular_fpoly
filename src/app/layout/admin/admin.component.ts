import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  data: any;
  constructor(private router: Router) {
    const result: any = localStorage.getItem('user');
    this.data = JSON.parse(result);
    if (this.data?.user?.role !== 0 || !this.data?.user) {
      this.router.navigate(['/']);
    }
  }

  onSignOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
