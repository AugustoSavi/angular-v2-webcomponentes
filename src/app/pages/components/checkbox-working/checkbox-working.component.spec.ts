import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWorkingComponent } from './checkbox-working.component';

describe('CheckboxWorkingComponent', () => {
  let component: CheckboxWorkingComponent;
  let fixture: ComponentFixture<CheckboxWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxWorkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
