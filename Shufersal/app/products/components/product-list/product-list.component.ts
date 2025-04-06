import { Component, inject, OnInit } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
    productService = inject(ProductsService);

    ngOnInit(): void {
        this.productService.getAllProducts();
    }

}
