import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../help';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(`${API_URL}/products`);
  }
  getDetail(id: number) {
    return this.http.get(`${API_URL}/products/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${API_URL}/products/${id}`);
  }

  addProduct(value: any) {
    return this.http.post(`${API_URL}/products`, value);
  }

  updateProduct(id: number, value: any) {
    return this.http.put(`${API_URL}/products/${id}`, value);
  }
}
