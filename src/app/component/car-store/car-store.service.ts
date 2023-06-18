import { Injectable } from "@angular/core";

import { CarService } from "../car.service";

@Injectable()
export class CarStoreApiService extends CarService {

    protected override apiDeleteUrl(id: string): string {
        return `http://localhost:3000/car/store/delete/${id}`;
    }
}
