import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  pageTitle : string = 'Product List';

  ngOnInit(): void {
  }

}
