import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.css'
})
export class CartIconComponent {
  cartCount: number = 0;

}
