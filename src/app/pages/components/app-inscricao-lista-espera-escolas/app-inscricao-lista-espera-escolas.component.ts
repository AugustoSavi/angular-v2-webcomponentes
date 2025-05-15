import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrButton, BrDivider, BrIcon, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-app-inscricao-lista-espera-escolas',
  imports: [CommonModule, FormsModule, BrSelect, BrDivider, BrButton, BrIcon],
  templateUrl: './app-inscricao-lista-espera-escolas.component.html',
  styleUrl: './app-inscricao-lista-espera-escolas.component.scss'
})
export class AppInscricaoListaEsperaEscolasComponent {
  selectedEscolas: string[] = ['bebe'];

  arrayEscolas: string[] = ['1'];

  multiSelectOptionsEscolas = [
    { label: 'CEI JARDIM MINUANO', value: 'bebe', selected: false },
    { label: 'CEI JOAQUIM PEREIRA', value: 'bem-pequenas', selected: false },
    { label: 'CEI JOSÉ DIOMAR PADILHA', value: 'pequenas', selected: false },
    { label: 'CEI AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', value: 'pequenas', selected: false },
  ];

  selectedSimple: string[] = [];
  selectedNested: string[] = [];
  checkedMatutino: boolean = false;
  checkedVespertino: boolean = false;
  checkedNoturno: boolean = false;
  checkedIntegral: boolean = false;

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
    console.log('Checkbox value:', event);
    console.log('Checkbox checked:', (event.target as HTMLInputElement).checked);
  }

  randomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addEscola() {
    this.arrayEscolas.push(this.randomString());
  }


  deleteSubmission(name: string) {
    this.arrayEscolas = this.arrayEscolas.filter((item) => item !== name);
  }

}
