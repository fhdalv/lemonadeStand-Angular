import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LemonadeComponent } from "./lemonade/lemonade.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { CheckoutComponent } from "./checkout/checkout.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LemonadeComponent, CustomerFormComponent, ReactiveFormsModule, FormsModule, CheckoutComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lemonadeStand-Angular';
}
