import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CurrencyPipe, NgFor } from '@angular/common';

interface Lemonade {
  id: number,
  lemonJuice: number,
  sugar: number,
  iceCubes: number,
  price: number
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, NgFor, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  //creating a variable to take input of type Lemonade interface created above
  //which is same as the one in lemonade.ts component.
  //this lemonades input will receive values from the lemonade.html and so we can pass this lemonades array to cart.html
  @Input() lemonades: Lemonade[] = [];

  totalPrice: number = 0;

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  

  receiveLemonadeId(removedLemonadeId: number){
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId)
  }

  //every time we create a cart we want to make sure we grab all the price
  ngOnInit(): void {
    this.lemonades.forEach(
      lemonade => (this.totalPrice = this.totalPrice + lemonade.price)
    )
  }

}
