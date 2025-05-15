import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

declare global {
  interface Window {
    core: {
      BRDateTimePicker: new (selector: string, element: Element, options: { minDate: string; maxDate: string }) => void;
    };
  }
}
import { FormsModule } from '@angular/forms';
import { BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-app-inscricao-lista-espera-nome',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage],
  templateUrl: './app-inscricao-lista-espera-nome.component.html',
  styleUrl: './app-inscricao-lista-espera-nome.component.scss'
})
export class AppInscricaoListaEsperaNomeComponent implements AfterViewInit {
  nome: string = '';
  ngAfterViewInit(): void {
    const datetimepickerElements = document.querySelectorAll('.br-datetimepicker');
    datetimepickerElements.forEach((element) => {
      new window.core.BRDateTimePicker('br-datetimepicker', element, {
        minDate: '10/05/2025',
        maxDate: '30/05/2025',
      });
    });
  }
}
