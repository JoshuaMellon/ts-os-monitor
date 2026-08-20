import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineWidget } from './machine-widget';

describe('MachineWidget', () => {
  let component: MachineWidget;
  let fixture: ComponentFixture<MachineWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
