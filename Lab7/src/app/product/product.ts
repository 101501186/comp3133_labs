import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  // @Input() public product = null

  //product will use default data if not supplied by parent
  @Input() public product = {
    id: 0,
    name : "NA",
    category: "NA",
    price : 0.0,
    inStock : false
  }

}
