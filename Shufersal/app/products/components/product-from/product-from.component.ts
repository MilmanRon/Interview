import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-from',
  imports: [ReactiveFormsModule],
  templateUrl: './product-from.component.html',
  styleUrl: './product-from.component.css'
})
export class ProductFromComponent {
    productsService = inject(ProductsService);

    productForm =new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        price: new FormControl(),
    })
    
    addProduct(){
        const product = this.productForm.value as Product;
        this.productsService.addProduct(product);
    }
}
