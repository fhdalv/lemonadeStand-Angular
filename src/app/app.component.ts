import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LemonadeComponent } from "./lemonade/lemonade.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LemonadeComponent, CustomerFormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lemonadeStand-Angular';
}
