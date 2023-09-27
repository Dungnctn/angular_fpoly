import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../help';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(value: any) {
    return this.http.post(`${API_URL}/signin`, value);
  }

  signUp(value: any) {
    return this.http.post(`${API_URL}/signup`, value);
  }
}
