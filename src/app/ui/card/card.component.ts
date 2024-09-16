import { Component, Input } from '@angular/core';
import { Card } from '../../models/clash-royale.interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() card!: Card;

  getRarityColor(rarity: string): string {
    switch (rarity) {
      case 'common':
        return '#3D7FFF';
      case 'rare':
        return '#ED7219';
      case 'epic':
        return '#9D12F3';
      case 'legendary':
        return '#0cc2cd';
      default:
        return 'black';
    }
  }
}
