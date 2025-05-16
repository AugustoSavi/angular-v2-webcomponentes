import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrInput,
  BrButton,
  BrMessage,
  BrIcon,
  BrSelect,
} from '@govbr-ds/webcomponents-angular/standalone';
import { ModalComponent } from '../modal/modal.component';

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
    BrSelect,
    ModalComponent
  ],
  templateUrl: './app-inscricao-lista-espera-formulario.component.html',
  styleUrls: ['./app-inscricao-lista-espera-formulario.component.scss'],
})
export class AppInscricaoListaEsperaFormularioComponent {

  modalOpen = false;
  openModal() {
    this.modalOpen = true;
  }
  onModalConfirm() {
    this.modalOpen = false;
  }

  simpleField = '';
  user = { contato: '', numero: '', password: '', confirmPassword: '' , email: '', name: '' };
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
