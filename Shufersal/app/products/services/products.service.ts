import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsSig = signal<Product[]>([]);
  errorSig = signal<boolean>(false);
  http = inject(HttpClient);
  endpoint = 'products';

  addProduct(product: Product): void {
    this.http
      .post<Product>(`${environment.apiUrl}/${this.endpoint}`, product)
      .subscribe({
        next: (response) =>
          this.productsSig.update((products) => [...products, response]),
        error: (error) => {
          this.errorSig.set(true);
          console.log(error);
        },
      });
  }

  getProduct(id: number) {}

  getAllProducts() {
    this.http
        .get<Product[]>(`${environment.apiUrl}/${this.endpoint}`)
        .subscribe({
            next: response => this.productsSig.set(response),
            error: error => {
                this.errorSig.set(true)
                console.log(error);
            }
        })
  }

  updateProduct(product: Product, id: number) {
    return this.http.put<Product>(
      `${environment.apiUrl}/${this.endpoint}/${id}`,
      product
    );
  }

  deleteProduct(id: number) {
    this.http
        .delete(`${environment.apiUrl}/${this.endpoint}/${id}`)
        .subscribe({
            next: () => this.productsSig.update(products => products.filter(p => p.id != id)),
            error: error => console.log(error)
        })
  }
}
