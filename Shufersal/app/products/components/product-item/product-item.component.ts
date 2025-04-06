import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
    productService = inject(ProductsService);
    product = input.required<Product>();

    deleteProduct(){
        this.productService.deleteProduct(this.product().id);
    }
}
