import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Service } from './service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Service[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(): void {
    this.servicesService.getService()
      .subscribe(services => this.services = services);
  }

}
