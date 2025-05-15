import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const core = (window as any).core;
    if (core?.BRStep) {
      const stepList = [];
      for (const brStep of Array.from(document.querySelectorAll('.br-step'))) {
        stepList.push(new core.BRStep('br-step', brStep));
      }
      console.log('Passos BRStep inicializados:', stepList);
    } else {
      console.error('core.BRStep não disponível. Verifique se o script core-init.js foi carregado corretamente.');
    }
  }
}
