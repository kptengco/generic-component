import { Component } from "@angular/core";
import { DeleteEngineService } from "src/shared";
import { CarStoreApiService } from "./car-store.service";

@Component({
    selector: "app-car-store-component",
    templateUrl: "./car-store.component.html",
    providers: [
        CarStoreApiService
    ],
    viewProviders: [
        {
            provide: DeleteEngineService,
            useExisting: CarStoreApiService
        }
    ]
})
export class CarStoreComponent {

    public resourceId: string = "CAR_STORE_ID_1";
}
