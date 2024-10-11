import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CardComponent } from "./card/card.component";
import { NgFor } from '@angular/common';
import { GlassComponent } from "./glass/glass.component";

interface Product {
  name: string,
  amount: number,
  max: number,
  price: number,
  unit: string
}


@Component({
  selector: 'app-lemonade',
  standalone: true,
  imports: [ProductComponent, CardComponent, NgFor, GlassComponent],
  templateUrl: './lemonade.component.html',
  styleUrl: './lemonade.component.css'
})
export class LemonadeComponent implements OnInit{
  products: Product[] = [
    {
      name: 'Lemon Juice',
      price: 0.5,
      amount: 0,
      max: 10,
      unit: 'oz'
    },
    {
      name: 'Sugar',
      price: 0.25,
      amount: 0,
      max: 8,
      unit: 'tsp'
    },
    {
      name: 'Ice Cubes',
      price: 0.05,
      amount: 0,
      max: 12,
      unit: 'cubes'
    }

  ]

  increment(productName: string) {
    LemonadeComponent.bind(this)
    //getting product out of the array
    if(this.products.find(product => product.name === productName)){
      this.products.map(product => {
        if(product.name === productName) {
          product.amount < product.max 
            ? product.amount += 1 
            : product.amount = product.amount
        }
      })
    }
  }

  decrement(productName: string) {
    LemonadeComponent.bind(this)
        //getting product out of the array
        if(this.products.find(product => product.name === productName)){
          this.products.map(product => {
            if(product.name === productName) {
              //logic to limit decrementing to 0
              product.amount > 0 ? product.amount -= 1 : product.amount
            }
          })
        }
  }

  ngOnInit(): void { 
  }



}
