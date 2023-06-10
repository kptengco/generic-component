import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { DeleteEngineService } from "src/shared";

@Injectable()
export abstract class CarService extends DeleteEngineService {

    public override loading!: boolean;

    constructor(
        private readonly httpClient: HttpClient
    ) {
        super();
    }

    protected abstract apiDeleteUrl(id: string): string;

    public override async delete(id: string): Promise<void> {
        const apiDeleteUrl: string = this.apiDeleteUrl(id);
        console.info(id, '------------------- resource id', `API URl: ${apiDeleteUrl}`);

        try {
            // you may call a dialog service here to confirm the deletion before calling the delete API

            await firstValueFrom(this.httpClient.delete(apiDeleteUrl));

            // you may call a notification service here to show a deletion message
        } catch (e) {
            // you may call a notification service here to show an error message
        }
    }
}
