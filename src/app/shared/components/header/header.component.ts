import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menuVisible = false;
  @Output() toggleMenu = new EventEmitter<void>();

  onMenuClick() {
    console.log('[Header] Botão de menu clicado');
    this.toggleMenu.emit();
  }
}
