import { Component } from "@angular/core";
import { DeleteEngineService } from "src/shared";
import { CarApiService } from "./car.service";

@Component({
    selector: "app-car-component",
    templateUrl: "./car.component.html",
    providers: [
        CarApiService
    ],
    viewProviders: [
        {
            provide: DeleteEngineService,
            useExisting: CarApiService
        }
    ]
})
export class CarComponent {

    public resourceId: string = "CAR_ID_1";
}
