import { Component } from '@angular/core';
import Product from './model/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./grid.css','./flex.css']
})
export class AppComponent {
  layout = 0;
  products: Array<Product> = [
    {
        name: 'teste',
        description: 'Este é um belo produto',
        count: 5
    },
    {
        name: 'teste 2',
        description: 'Este é um belo produto 2 ',
        count: 0
    },
    {
        name: 'teste 3',
        description: 'Este é um belo produto 3',
        count: 5
    },
  ]

  toggleLayout(value: number) {
    this.layout = value
  }
}
