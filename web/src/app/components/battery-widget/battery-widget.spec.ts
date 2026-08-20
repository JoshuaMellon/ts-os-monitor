import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BatteryWidget } from "./battery-widget";

describe("BatteryWidget", () => {
    let component: BatteryWidget;
    let fixture: ComponentFixture<BatteryWidget>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BatteryWidget],
        }).compileComponents();

        fixture = TestBed.createComponent(BatteryWidget);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
