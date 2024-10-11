import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConvertMeasurementPipe } from './convert-measurement.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, ConvertMeasurementPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  // Getting input name variable for different products
  @Input() name: string = ""
  @Input() amount: number = 0
  @Input() max: number = 10
  @Input() unit: string = ""

  //whenever we call this function it's gonna emit the value and the parent will be able to see that value.
  //this is called in product.html whenever the button is clicked.
  @Output() incrementProductByName = new EventEmitter<string>()
  handleIncrement() {
    this.incrementProductByName.emit()
  }
  @Output() decrementProductByName = new EventEmitter<string>()
  handleDecrement() {
    this.decrementProductByName.emit()
  }

  ngOnInit(): void {
  }


}
