import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInscricaoListaEsperaEscolasComponent } from './app-inscricao-lista-espera-escolas.component';

describe('AppInscricaoListaEsperaEscolasComponent', () => {
  let component: AppInscricaoListaEsperaEscolasComponent;
  let fixture: ComponentFixture<AppInscricaoListaEsperaEscolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInscricaoListaEsperaEscolasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInscricaoListaEsperaEscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
