import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UsbWidget } from "./usb-widget";

describe("UsbWidget", () => {
    let component: UsbWidget;
    let fixture: ComponentFixture<UsbWidget>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UsbWidget],
        }).compileComponents();

        fixture = TestBed.createComponent(UsbWidget);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
