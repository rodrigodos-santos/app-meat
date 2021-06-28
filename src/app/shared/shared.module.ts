import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RatingComponent } from './rating/rating.component';
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurant.service';
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { LoginService } from './../security/login/login.service';

import { LoggedInGuard } from 'app/security/loggedin.guard';
import { LeaveOrderGuard } from './../order/leave-order.guard';

import { AuthInterceptor } from './../security/auth.interceptor';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        InputComponent, RadioComponent, RatingComponent, SnackbarComponent
    ] 
})

export class SharedModule { 
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [
                ShoppingCartService, 
                RestaurantsService, 
                OrderService, 
                NotificationService, 
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }
}