import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunTimingsComponent } from './sun-timings.component';

describe('SunTimingsComponent', () => {
  let component: SunTimingsComponent;
  let fixture: ComponentFixture<SunTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunTimingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
