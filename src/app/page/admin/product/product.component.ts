import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: any;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.log(err),
    });
  }

  onDelete(id: number) {
    const confirm = window.confirm('Ban co chac muon xoa khong?');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productService.getAll().subscribe({
          next: (data) => (this.products = data),
          error: (err) => console.log(err),
        });
      });
    }
  }
}
