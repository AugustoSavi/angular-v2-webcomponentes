import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step',
  imports: [CommonModule],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() steps: string[] = [];
  @Input() selectedIndex = 0; // passo ativo vindo do pai

  @Output() stepChange = new EventEmitter<number>(); // evento para avisar mudança

  onStepClick(i: number) {
    this.stepChange.emit(i);
  }
}
