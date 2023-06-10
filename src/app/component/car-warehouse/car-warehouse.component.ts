import { Component } from "@angular/core";
import { DeleteEngineService } from "src/shared";
import { CarWarehouseApiService } from "./car-warehouse.service";

@Component({
    selector: "app-car-warehouse-component",
    templateUrl: "./car-warehouse.component.html",
    providers: [
        CarWarehouseApiService
    ],
    viewProviders: [
        {
            provide: DeleteEngineService,
            useExisting: CarWarehouseApiService
        }
    ]
})
export class CarWarehouseComponent {

    public resourceId: string = "CAR_WAREHOUSE_ID_1";
}
