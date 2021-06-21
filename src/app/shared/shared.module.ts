import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";

import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurant.service';
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        InputComponent, RadioComponent, RatingComponent
    ] 
})

export class SharedModule { 
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService]
        }
    }
}