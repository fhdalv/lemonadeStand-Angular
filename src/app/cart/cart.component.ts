import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import LemonadeStand from '../models/LemonadeStand';

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
  imports: [CartItemComponent, NgFor, CurrencyPipe, ReactiveFormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private cartData: CartService, private router: Router) {}
  
  lemonadeStands: LemonadeStand[] = [];

  customerForm: FormGroup = new FormGroup({
    //this selectedStand has a formControl of type LemonadeStand interface created above
    //the pipe operator here is union type. Meaning this FormControl can be of either LemonadeStand
    //or undefined type. And finally we are setting the initial value to undefined.
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required])

  })
  
  onSubmit() {
    console.log(`Selected Stand: ${JSON.stringify(this.customerForm.controls['selectedStand'].value)}`)

    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value);

    console.log(this.cartData.selectedStand);
    console.log(this.cartData.currentTotalPrice);
    this.router.navigateByUrl('/checkout');
  }
  //creating a variable to take input of type Lemonade interface created above
  //which is same as the one in lemonade.ts component.
  //this lemonades input will receive values from the lemonade.html and so we can pass this lemonades array to cart.html
  @Input() lemonades: Lemonade[] = [];

  totalPrice: number = 0;

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  

  receiveLemonadeId(removedLemonadeId: number){
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId)
  }

  ngOnInit(): void {
    //every time we create a cart we want to make sure we grab all the price
    // this.lemonades.forEach(
    // lemonade => (this.totalPrice = this.totalPrice + lemonade.price));

    //.subscribe gives us the updates of what our current stand options/lists are
    //assigning the values of currentStandOptions array from global cartService
    //to this.lemonadeStands iterating one by one
    //acts like getters
    this.cartData.currentStandOptions.subscribe(
      (currentStandOption) => this.lemonadeStands = currentStandOption);

    //getting the selected stand from the user in customer-form.html
    //with global selectedStand and setting the default value of the selectedStand
    this.cartData.selectedStand.subscribe((selectedStand) =>
      this.customerForm.setValue({selectedStand: selectedStand})
      );
    //every time we create a cart we want to make sure we grab all the price
    this.lemonades.forEach(lemonade => {
      this.totalPrice = this.totalPrice + lemonade.price;
      this.cartData.updateTotalPrice(this.totalPrice);
    });
      
  }

  updateSelectedStand () {
    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value);
  }

}
