import { ProductService } from './../product.service';
import { IProduct } from './../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  similarQuery!: string;
  loading = false;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe({
      next: (params) => {
        const productId = params['productId'];
        this.productService.getProductById(productId).subscribe({
          next: (response) => {
            this.loading = false;
            this.product = response.product;
            this.similarQuery = `category=${this.product.category}`;
            console.log(this.similarQuery);
          },
        });
      },
    });
  }
  getPriceAfterDiscount() {
    const { price, discountPercentage } = this.product;
    const result = price - price * (discountPercentage / 100);
    return result.toFixed(1);
  }
}
