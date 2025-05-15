import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInscricaoListaEsperaNomeComponent } from './app-inscricao-lista-espera-nome.component';

describe('AppInscricaoListaEsperaNomeComponent', () => {
  let component: AppInscricaoListaEsperaNomeComponent;
  let fixture: ComponentFixture<AppInscricaoListaEsperaNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInscricaoListaEsperaNomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInscricaoListaEsperaNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
