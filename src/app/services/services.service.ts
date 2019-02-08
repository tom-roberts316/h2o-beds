import { Injectable } from '@angular/core';
import { SERVICES } from './service-list';
import { Service } from './service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor() {}

  getService(): Observable<Service[]> {
    return of (SERVICES);
  }

}
