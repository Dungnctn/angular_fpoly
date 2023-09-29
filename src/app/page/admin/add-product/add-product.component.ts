import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  formProduct = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    price: [0, Validators.required],
    desc: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit() {
    this.productService.addProduct(this.formProduct.value).subscribe({
      next: () => {
        this.formProduct.reset(), alert('Add product success!');
        this.router.navigate(['/admin/products']);
      },
      error: (err) => console.log('err add product', err),
    });
  }
}
