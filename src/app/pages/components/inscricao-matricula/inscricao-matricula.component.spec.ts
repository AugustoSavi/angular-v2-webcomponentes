import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoMatriculaComponent } from './inscricao-matricula.component';

describe('InscricaoMatriculaComponent', () => {
  let component: InscricaoMatriculaComponent;
  let fixture: ComponentFixture<InscricaoMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscricaoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
