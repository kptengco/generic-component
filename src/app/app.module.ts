import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { DeleteEngineModule } from "src/shared";

import { AppComponent } from "./app.component";
import {
    CarComponent,
    CarStoreComponent,
    CarWarehouseComponent
} from "./component";

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        CarStoreComponent,
        CarWarehouseComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        DeleteEngineModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
