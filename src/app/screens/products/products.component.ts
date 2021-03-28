import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
        productName: "Samsung Note 10",
        productPrice: "75000",
        productCurrency: "INR",
        productCategory: "Mobile"
      },
      {
        productName: "Iphone 11",
        productPrice: "200000",
        productCurrency: "INR",
        productCategory: "Mobile"
      },
      {
        productName: "Sony Max",
        productPrice: "2500000",
        productCurrency: "INR",
        productCategory: "TV"
      }
    ];
  }

  deleteitem(elementIndex: any) {
    this.productList.splice(elementIndex, 1);
  }
}
