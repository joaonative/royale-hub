import { Component, OnInit } from '@angular/core';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { Card } from '../models/clash-royale.interfaces';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  constructor(private clashRoyaleService: ClashRoyaleService) {}

  cards: Card[] = [];
  sortOrder: 'asc' | 'desc' = 'desc';

  ngOnInit(): void {
    this.clashRoyaleService.getCards().subscribe(
      (response) => {
        this.cards = response.items;
        this.sortCards();
      },
      (error) => {
        console.error('Cards Method Error: ', error);
      }
    );
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    this.sortCards();
  }

  sortCards(): void {
    this.cards.sort((a, b) => {
      const rarityOrder = ['common', 'rare', 'epic', 'legendary'];
      const aIndex = rarityOrder.indexOf(a.rarity);
      const bIndex = rarityOrder.indexOf(b.rarity);
      return this.sortOrder === 'desc' ? bIndex - aIndex : aIndex - bIndex;
    });
  }

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
