import { Component, OnInit, Input } from '@angular/core';
import Product from '../model/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
