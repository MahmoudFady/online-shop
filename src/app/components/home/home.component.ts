import { ProductService } from './../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  targetQuery = '';
  query = '';
  constructor(private productService: ProductService) {}
  ngOnInit(): void {}
  onSearch() {
    this.targetQuery = 'searchQ=' + this.query;
    console.log(this.targetQuery);
  }
}
