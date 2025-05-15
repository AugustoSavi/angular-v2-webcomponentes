import { Component } from '@angular/core';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-viewer',
  imports: [CommonModule, StepComponent],
  templateUrl: './step-viewer.component.html',
  styleUrl: './step-viewer.component.scss'
})
export class StepViewerComponent {
  steps = ['Nome', 'Nível/Modalidade', 'Formulário', 'Confirmação', 'Comprovante'];
  selectedStep = 0;

  onStepChange(index: number) {
    this.selectedStep = index;
  }
}
