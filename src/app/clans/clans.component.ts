import { Component } from '@angular/core';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { Clan } from '../models/clash-royale.interfaces';
import { ClanCardComponent } from '../ui/clan-card/clan-card.component';
import { LoadingComponent } from '../ui/loading/loading.component';

@Component({
  selector: 'app-clans',
  standalone: true,
  imports: [ClanCardComponent, LoadingComponent],
  templateUrl: './clans.component.html',
})
export class ClansComponent {
  constructor(private clashRoyaleService: ClashRoyaleService) {}

  featuredClans: {
    northAmerica: Clan[];
    southAmerica: Clan[];
    asia: Clan[];
    oceania: Clan[];
    europe: Clan[];
    international: Clan[];
  } = {
    northAmerica: [],
    southAmerica: [],
    asia: [],
    oceania: [],
    europe: [],
    international: [],
  };

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.clashRoyaleService.getFeaturedClans().subscribe({
      next: (res) => {
        this.featuredClans = {
          northAmerica: res.northAmerica.items,
          southAmerica: res.southAmerica.items,
          asia: res.asia.items,
          oceania: res.oceania.items,
          europe: res.europe.items,
          international: res.international.items,
        };
      },
      error: (err) => console.error('Get FeaturedClans Error: ', err),
      complete: () => (this.loading = false),
    });
  }
}
