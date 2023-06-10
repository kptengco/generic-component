import { Directive, HostListener, Input, } from "@angular/core";

import { DeleteEngineService } from "../service";

@Directive({
    selector: "[deleteEngineDirective]"
})
export class DeleteEngineDirective {

    @Input() public deleteId!: string;

    constructor(
        private readonly deleteService: DeleteEngineService
    ) { }

    @HostListener("click")
    public confirmDelete(): void {
        this.deleteService.delete(this.deleteId);
    }
}
