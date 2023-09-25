import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  products: any[] = [
    {
      _id: 1,
      img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/9/25/1246148/Ngan-Hang-Nha-Nuoc-L.jpg?w=660',
      name: 'San pham A',
      price: 100,
    },
    {
      _id: 2,
      img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/9/25/1246148/Ngan-Hang-Nha-Nuoc-L.jpg?w=660',
      name: 'San pham B',
      price: 200,
    },
  ];
}
