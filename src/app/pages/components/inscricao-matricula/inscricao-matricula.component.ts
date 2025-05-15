import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';
import { AppInscricaoListaEsperaNomeComponent } from '../app-inscricao-lista-espera-nome/app-inscricao-lista-espera-nome.component';
import { BrBreadcrumb, BrCollapse, BrDivider, BrIcon, BrItem, BrList } from '@govbr-ds/webcomponents-angular/standalone';
import { AppInscricaoListaEsperaModalidadeComponent } from '../app-inscricao-lista-espera-modalidade/app-inscricao-lista-espera-modalidade.component';
import { AppInscricaoListaEsperaEscolasComponent } from '../app-inscricao-lista-espera-escolas/app-inscricao-lista-espera-escolas.component';

interface Crumb {
  label: string;
  url?: string;
  target?: string;
  active?: boolean;
}

@Component({
  selector: 'app-inscricao-matricula',
  standalone: true,
  imports: [
    CommonModule,
    StepComponent,
    AppInscricaoListaEsperaNomeComponent,  
    BrBreadcrumb, 
    BrDivider, 
    BrList, 
    BrCollapse, 
    BrItem, 
    BrIcon,
    AppInscricaoListaEsperaModalidadeComponent,
    AppInscricaoListaEsperaEscolasComponent
  ],
  templateUrl: './inscricao-matricula.component.html',
  styleUrl: './inscricao-matricula.component.scss'
})
export class InscricaoMatriculaComponent {
  isInscricaoAtiva = false;

  /** Lista de páginas ancestrais + página atual */
  links: Crumb[] = [
    { label: 'Explorar serviços', url: '/', target: '_self' },
    { label: 'Inscrição lista de espera 2025', active: true },
  ];


  steps = ['Nome', 'Nível/Modalidade', 'Escolas', 'Formulário', 'Confirmação', 'Comprovante'];
  selectedStep = 0;

  onStepChange(index: number) {
    this.selectedStep = index;
  }

  nextStep() {
    if (this.selectedStep < this.steps.length - 1) {
      this.selectedStep++;
    }
  }

  backStep() {
    if (this.selectedStep > 0) {
      this.selectedStep--;
    }
  }

  iniciarInscricao(): void  {
    this.isInscricaoAtiva = true;
  }
}
