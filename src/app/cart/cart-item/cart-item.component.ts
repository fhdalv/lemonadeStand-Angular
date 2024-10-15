import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlassComponent } from "../../lemonade/glass/glass.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [GlassComponent, CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  //input accepting lemonade
  @Input() lemonade: any;

  //Outputting data (id) from here to cart and then from there to parent lemonade
  //so basically when we click the remove button of this compoment,
  //this event will emit and it will pass the (id) as the data to it's parent component
  @Output() passLemonadeEvent = new EventEmitter<number>();

  passLemonadeId(removedLemonadeId: number) {
    this.passLemonadeEvent.emit(removedLemonadeId);
  }

}
