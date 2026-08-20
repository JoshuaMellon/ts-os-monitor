import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuWidget } from './cpu-widget';

describe('CpuWidget', () => {
  let component: CpuWidget;
  let fixture: ComponentFixture<CpuWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
