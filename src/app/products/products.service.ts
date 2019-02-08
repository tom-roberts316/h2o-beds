import { Injectable } from '@angular/core';
import { PRODUCTS } from './products-list';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of (PRODUCTS);
  }

}
