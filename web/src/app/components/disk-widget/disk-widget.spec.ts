import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DiskWidget } from "./disk-widget";

describe("DiskWidget", () => {
    let component: DiskWidget;
    let fixture: ComponentFixture<DiskWidget>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DiskWidget],
        }).compileComponents();

        fixture = TestBed.createComponent(DiskWidget);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
