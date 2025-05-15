import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';
import { AppInscricaoListaEsperaNomeComponent } from '../app-inscricao-lista-espera-nome/app-inscricao-lista-espera-nome.component';

@Component({
  selector: 'app-inscricao-matricula',
  standalone: true,
  imports: [CommonModule, StepComponent, AppInscricaoListaEsperaNomeComponent],
  templateUrl: './inscricao-matricula.component.html',
  styleUrl: './inscricao-matricula.component.scss'
})
export class InscricaoMatriculaComponent {
  steps = ['Nome', 'Nível/Modalidade', 'Formulário', 'Confirmação', 'Comprovante'];
  selectedStep = 0;

  onStepChange(index: number) {
    this.selectedStep = index;
  }
}
