import { Component, OnInit } from '@angular/core';
import { Contact } from './../../contact';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public contact: Contact) { }

  active = false;

  ngOnInit() {
  }

  onClick() {
    this.active = !this.active;
  }

}
