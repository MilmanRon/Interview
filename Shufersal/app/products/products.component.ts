import { Component } from '@angular/core';
import { ProductFromComponent } from "./components/product-from/product-from.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-products',
  imports: [ProductFromComponent, ProductListComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {

}
