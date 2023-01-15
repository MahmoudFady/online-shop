import { PageEvent } from '@angular/material/paginator';
import { IProduct } from './../shared/models/product.model';
import { ProductService } from './product.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() query!: string;
  limit = 8;
  total!: number;
  products: IProduct[] = [];
  loading = false;
  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    this.productService.getProductsByQuery(this.query);
  }
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.loading = true;
    this.productService.getProductsByQuery(this.query);
    this.productService.updatedPoductsListener().subscribe({
      next: (response) => {
        this.products = response.products;
        this.total = response.total;
        this.loading = false;
      },
    });
  }
  onPageChanges($page: PageEvent) {
    let { pageIndex, pageSize } = $page;
    pageIndex += 1;
    this.loading = true;
    this.productService.getProductsByQuery(this.query, pageSize, pageIndex);
  }
}
