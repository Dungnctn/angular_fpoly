import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: any[] = [];
  filterValue: string = '';

  delete(id: number) {
    const confirm = window.confirm('Ban co muon xoa?');
    if (confirm) {
      this.products = this.products.filter((item: any) => item.id != id);
    }
  }

  search() {
    if (!this.filterValue) {
      console.log(
        'nulll',
        this.products.filter((i) => i.name !== this.filterValue)
      );

      this.products = this.products.filter((i) => i.name !== this.filterValue);
    } else {
      this.products = this.products.filter((item) =>
        item.name.includes(this.filterValue)
      );
    }
  }
}
