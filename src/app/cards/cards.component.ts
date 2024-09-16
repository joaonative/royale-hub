import { Component, OnInit } from '@angular/core';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { Card } from '../models/clash-royale.interfaces';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  constructor(private clashRoyaleService: ClashRoyaleService) {}

  cards: Card[] = [];
  sortOrder: 'asc' | 'desc' = 'desc';

  ngOnInit(): void {
    this.clashRoyaleService.getCards().subscribe({
      next: (res) => {
        this.cards = res.items;
        this.sortCards();
      },
      error: (err) => console.error('Get Cards Error: ', err),
    });
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
}
