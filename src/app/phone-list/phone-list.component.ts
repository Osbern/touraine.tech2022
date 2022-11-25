import { Component, OnInit } from '@angular/core';
import {PhoneService} from "../app.module";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  query: any;
  orderProp="age";
  phones: {id:string, name:string, imageUrl:string, snippet:string}[] = [];

  constructor(private phoneService:PhoneService) { }

  ngOnInit(): void {
    this.phones = this.phoneService.query();
  }

}
