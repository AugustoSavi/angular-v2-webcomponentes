import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = 'Título do Modal';

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  confirm() {
    this.confirmed.emit();
    this.close();
  }

  closeModal(event: Event) {
    if ((event.target as HTMLElement).classList.contains('br-scrim-util')) {
      this.close();
    }
  }
}
