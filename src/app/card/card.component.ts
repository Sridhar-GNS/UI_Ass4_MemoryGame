
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  cardValue!: string | number;
  @Input()
  isFlipped!: boolean;
  @Output() cardClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    if (!this.isFlipped) {
      this.cardClicked.emit();
    }
  }
}
