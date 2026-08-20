import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryWidget } from './memory-widget';

describe('MemoryWidget', () => {
  let component: MemoryWidget;
  let fixture: ComponentFixture<MemoryWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
