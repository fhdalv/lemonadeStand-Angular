import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { InputComponent } from "./input/input.component";

interface LemonadeStand {
  id: number,
  name: string
}

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe, NgClass, NgIf, InputComponent],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

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
    phoneNumber: new FormControl<string>('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    //this selectedStand has a formControl of type LemonadeStand interface created above
    //the pipe operator here is union type. Meaning this FormControl can be of either LemonadeStand
    //or undefined type. And finally we are setting the initial value to undefined.
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required])

  })

  onSubmit() {
    console.log(`Name: ${this.customerForm.controls['name'].value}`)
  }

}
