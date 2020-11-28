import { Component, Input, OnInit } from '@angular/core';
import { Iproperty } from '../Model/iproperty';

@Component({
  selector: 'app-mruczarnia-card',
  templateUrl: './mruczarnia-card.component.html',
  styleUrls: ['./mruczarnia-card.component.css']
})
export class MruczarniaCardComponent implements OnInit {
@Input () property: any;
  constructor() { }

  ngOnInit(): void {
  }

}
