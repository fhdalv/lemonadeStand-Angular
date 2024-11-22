import { Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LemonadeComponent } from './lemonade/lemonade.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    {path: '', component: CustomerFormComponent},
    {path: 'lemonade', component: LemonadeComponent},
    {path: 'checkout', component: CheckoutComponent},
];
