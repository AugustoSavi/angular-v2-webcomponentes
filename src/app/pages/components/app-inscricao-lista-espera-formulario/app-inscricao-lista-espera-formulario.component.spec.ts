import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInscricaoListaEsperaFormularioComponent } from './app-inscricao-lista-espera-formulario.component';

describe('AppInscricaoListaEsperaFormularioComponent', () => {
  let component: AppInscricaoListaEsperaFormularioComponent;
  let fixture: ComponentFixture<AppInscricaoListaEsperaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInscricaoListaEsperaFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInscricaoListaEsperaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
