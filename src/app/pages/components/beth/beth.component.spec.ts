import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BethComponent } from './beth.component';

describe('BethComponent', () => {
  let component: BethComponent;
  let fixture: ComponentFixture<BethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BethComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
