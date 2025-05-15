import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrCheckbox, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { CheckboxWorkingComponent } from '../checkbox-working/checkbox-working.component';

@Component({
  selector: 'app-app-inscricao-lista-espera-modalidade',
  imports: [CommonModule, FormsModule, BrCheckbox, BrSelect, CheckboxWorkingComponent],
  templateUrl: './app-inscricao-lista-espera-modalidade.component.html',
  styleUrl: './app-inscricao-lista-espera-modalidade.component.scss'
})
export class AppInscricaoListaEsperaModalidadeComponent {
  selectedSimple: string[] = [];
  selectedNested: string[] = [];
  checkedAll: boolean = false;
  checkedEducacaoBasica: boolean = false;
  checkedAceleracao: boolean = false;
  checkedEja: boolean = false;

  multiSelectOptions = [
    { label: 'Ensino infantil', value: 'infantil', selected: false },
    { label: 'Ensino Fundamental', value: 'fundamental', selected: false },
    { label: 'Ensino médio', value: 'medio', selected: false },
  ];
  
  multiSelectOptionsEtapa = [
    { label: 'Bebês', value: 'bebe', selected: false },
    { label: 'Crianças bem pequenas', value: 'bem-pequenas', selected: false },
    { label: 'Crianças pequenas', value: 'pequenas', selected: false },
  ];

  selectedTechs: string[] = [];
  selectedEtapas: string[] = ['bebe'];

  onChangeCheckbox(event: Event, todos: boolean) {
    console.log('todos:', todos);
    if (todos) {
      this.checkedEducacaoBasica = !this.checkedEducacaoBasica;
      this.checkedAceleracao = !this.checkedAceleracao;
      this.checkedEja = !this.checkedEja;
    }
    console.log('Checkbox value:', event);
    console.log('Checkbox checked:', (event.target as HTMLInputElement).checked);
  }

}
