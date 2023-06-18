import { Injectable } from "@angular/core";

import { CarService } from "../car.service";

@Injectable()
export class CarWarehouseApiService extends CarService {

    protected override apiDeleteUrl(id: string): string {
        return `http://localhost:3000/car/warehouse/delete/${id}`;
    }
}
