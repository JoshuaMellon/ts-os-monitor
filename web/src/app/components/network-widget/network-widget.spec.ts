import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NetworkWidget } from "./network-widget";

describe("NetworkWidget", () => {
    let component: NetworkWidget;
    let fixture: ComponentFixture<NetworkWidget>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NetworkWidget],
        }).compileComponents();

        fixture = TestBed.createComponent(NetworkWidget);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
