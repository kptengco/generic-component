import { Component, Input } from "@angular/core";

@Component({
    selector: "delete-engine-component",
    template: `<button type="button" deleteEngineDirective [deleteId]="resourceId">{{btnLabel}}</button>`
})
export class DeleteEngineComponent {

    @Input() public resourceId!: string;
    @Input() public btnLabel: string = "Delete";
}
