import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  id: any;
  formProduct = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    price: [0, Validators.required],
    desc: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
      this.productService.getDetail(id).subscribe({
        next: (product) => {
          this.formProduct.patchValue(product);
        },
      });
    });
  }

  onSubmit() {
    this.productService
      .updateProduct(this.id, this.formProduct.value)
      .subscribe({
        complete: () => {
          alert('Update product success!');
          this.router.navigate(['/admin/products']);
        },
      });
  }
}
