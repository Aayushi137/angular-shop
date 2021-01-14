import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  // used input and output for navigating from child component to parent component or vice-versa
  @Input() product;
  @Output() notify= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}