import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GraphicsWidget } from "./graphics-widget";

describe("GraphicsWidget", () => {
    let component: GraphicsWidget;
    let fixture: ComponentFixture<GraphicsWidget>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GraphicsWidget],
        }).compileComponents();

        fixture = TestBed.createComponent(GraphicsWidget);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
