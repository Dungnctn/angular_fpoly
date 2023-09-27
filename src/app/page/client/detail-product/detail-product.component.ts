import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent {
  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(({ id }) => {
      console.log('id', id);

      // const prodId = id
      this.productService.getDetail(id).subscribe({
        next: (data) => (this.product = data),
        error: (err) => console.log('err', err),
      });
    });
  }
}
