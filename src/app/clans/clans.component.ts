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

  featuredClans: Clan[] = [];

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.clashRoyaleService.getFeaturedClans().subscribe({
      next: (res) => {
        (this.featuredClans = res.items), console.log(this.featuredClans);
      },
      error: (err) => console.error('Get FeaturedClans Error: ', err),
      complete: () => (this.loading = false),
    });
  }
}
