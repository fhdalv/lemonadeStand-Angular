import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from "./input/input.component";
import { PhoneFormControl } from './phone-form-control';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

interface LemonadeStand {
  id: number,
  name: string
}

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe, NgClass, NgIf, InputComponent, RouterLink],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  //to use the global cart service we need this constructor below just by calling the cartData variable
  constructor(private cartData: CartService, private router: Router) {}

  lemonadeStands: LemonadeStand[] = [
    {id: 1, name: 'Cooksys Lemonade Stand 1'},
    {id: 2, name: 'Cooksys Lemonade Stand 2'},
    {id: 3, name: 'Cooksys Lemonade Stand 3'}
  ]
//this formGroup is an angular built in class from ReactiveFormModule imported in app.component.ts
//this FormGroup is attached to a html form tag and is has FormControls which are basically the inputs(individual)
  customerForm: FormGroup = new FormGroup({
    //The first parameter of FromControl is the initial value, the second part is ng validators array.
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new PhoneFormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    //this selectedStand has a formControl of type LemonadeStand interface created above
    //the pipe operator here is union type. Meaning this FormControl can be of either LemonadeStand
    //or undefined type. And finally we are setting the initial value to undefined.
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required])

  })

  onSubmit() {
    console.log(`Name: ${this.customerForm.controls['name'].value}`)
    console.log(
      `Phone Number: ${this.customerForm.controls['phoneNumber'].value}`
    )
    console.log(
      `Selected Stand: ${JSON.stringify(this.customerForm.controls['selectedStand'].value)}`
    )
    //global setters
    this.cartData.updateSelectedStand(
      this.customerForm.controls['selectedStand'].value
    )

    this.cartData.updateCustomerName(
      this.customerForm.controls['name'].value
    )
    this.cartData.updateCustomerPhoneNumber(
      this.customerForm.controls['phoneNumber'].value
    )


    //passing all the options of lemonade stands to other component
    //acts like setters
    this.cartData.updateStandOptions(this.lemonadeStands);

    console.log(this.cartData.selectedStand)
    console.log(this.cartData.currentStandOptions)
    this.router.navigateByUrl('/lemonade')
  }

}
