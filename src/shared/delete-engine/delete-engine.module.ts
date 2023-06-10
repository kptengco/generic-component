import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DeleteEngineComponent } from "./component";

import { DeleteEngineDirective } from "./directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DeleteEngineDirective,
        DeleteEngineComponent
    ],
    exports: [
        DeleteEngineDirective,
        DeleteEngineComponent
    ]
})
export class DeleteEngineModule { }
