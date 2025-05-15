import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInscricaoListaEsperaModalidadeComponent } from './app-inscricao-lista-espera-modalidade.component';

describe('AppInscricaoListaEsperaModalidadeComponent', () => {
  let component: AppInscricaoListaEsperaModalidadeComponent;
  let fixture: ComponentFixture<AppInscricaoListaEsperaModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInscricaoListaEsperaModalidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInscricaoListaEsperaModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
