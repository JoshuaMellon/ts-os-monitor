import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BluetoothWidget } from "./bluetooth-widget";

describe("BluetoothWidget", () => {
    let component: BluetoothWidget;
    let fixture: ComponentFixture<BluetoothWidget>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BluetoothWidget],
        }).compileComponents();

        fixture = TestBed.createComponent(BluetoothWidget);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
