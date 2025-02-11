import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  imports: [MatCardModule],
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCardComponent {
  @Input() textContent: string | HTMLElement;

  /**
   *
   */
  constructor() {
    this.textContent = '';
  }
}
