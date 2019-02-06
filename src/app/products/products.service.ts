import { Injectable } from '@angular/core';
import { PRODUCTS } from './products-list';
import { Products } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() {}

  getProducts(): Observable<Products[]> {
    return of (PRODUCTS);
  }

}
