import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrInput,
  BrButton,
  BrMessage,
  BrIcon,
  BrSelect,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-app-inscricao-lista-espera-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrInput,
    BrButton,
    BrMessage,
    BrIcon,
    BrSelect
  ],
  templateUrl: './app-inscricao-lista-espera-formulario.component.html',
  styleUrls: ['./app-inscricao-lista-espera-formulario.component.scss'],
})
export class AppInscricaoListaEsperaFormularioComponent {

    // 7. Campo com two-way binding
    simpleField = '';

    // 6. Cadastro de Usuário
    user = { contato: '', numero: '', password: '', confirmPassword: '' , email: '', name: '' };
  
    // registros submetidos
    submissions: (typeof this.user)[] = [];
  
    resetForm(): void {
      this.user = { contato: '', numero: '', password: '', confirmPassword: '', email: '', name: ''  };
    }
  
    submitForm(): void {
      this.submissions.push({ ...this.user });
      this.resetForm();
    }
  
    deleteSubmission(index: number): void {
      this.submissions.splice(index, 1);
    }
}
