import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface LemonadeStand {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root',
})

export class CartService {
    //global state of variables
    //lemonade stand
    private selectedStandSource = new BehaviorSubject<LemonadeStand | undefined>(undefined);
    //it observes the changes in the currentStand as user change their input
    selectedStand = this.selectedStandSource.asObservable();

    //Stand Options
    private standOptionsSource = new BehaviorSubject<LemonadeStand[]>([]);
    currentStandOptions = this.standOptionsSource.asObservable();

    private customerNameSource = new BehaviorSubject<string>('')
    customerName = this.customerNameSource.asObservable()

    private customerPhoneNumberSource = new BehaviorSubject<string>('')
    customerPhoneNumber = this.customerPhoneNumberSource.asObservable()

    //totalPrice
    private totalPriceSource = new BehaviorSubject<number>(0);
    currentTotalPrice = this.totalPriceSource.asObservable();

    updateSelectedStand(stand: LemonadeStand){
        //when we call .next() it updates the value with the value that we are passing in
        this.selectedStandSource.next(stand);
    }

    updateStandOptions(stands: LemonadeStand[]) {
        this.standOptionsSource.next(stands);
    }
    
    updateCustomerName(newName: string) {
        this.customerNameSource.next(newName);
    }
    
    updateCustomerPhoneNumber(newPhoneNumber: string) {
        this.customerPhoneNumberSource.next(newPhoneNumber);
    }

    updateTotalPrice(totalPrice: number) {
        this.totalPriceSource.next(totalPrice);
    }

}
