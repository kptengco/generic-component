import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { DeleteEngineService } from "src/shared";

@Injectable()
export class CarApiService extends DeleteEngineService {
    public override loading!: boolean;

    constructor(
        private readonly httpClient: HttpClient
    ) {
        super();
    }

    public override async delete(id: string): Promise<void> {
        console.info(id, '------------------- resource id', `API URl: http://localhost:3000/car/delete/${id}`);

        try {
            // you may call a dialog service here to confirm the deletion before calling the delete API

            await firstValueFrom(this.httpClient.delete(`http://localhost:3000/car/delete/${id}`));

            // you may call a notification service here to show a deletion message
        } catch (e) {
            // you may call a notification service here to show an error message
        }
    }
}
