import { Component, OnInit } from '@angular/core';
import { Contact } from './../../contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public contact: Contact) { }

  ngOnInit() {
  }

}
