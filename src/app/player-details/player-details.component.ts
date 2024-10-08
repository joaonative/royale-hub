import { UpcomingChests, BattleLog } from './../models/clash-royale.interfaces';
import { Component } from '@angular/core';
import { Player } from '../models/clash-royale.interfaces';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingComponent } from '../ui/loading/loading.component';
import badges from '../../assets/badges.json';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  StarIcon,
  TrophyIcon,
  ArrowUpDownIcon,
  SwordsIcon,
  DropletIcon,
} from 'lucide-angular';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [LoadingComponent, RouterModule, LucideAngularModule, CardComponent],
  templateUrl: './player-details.component.html',
})
export class PlayerDetailsComponent {
  readonly StarIcon = StarIcon;
  readonly TrophyIcon = TrophyIcon;
  readonly ArrowUpDownIcon = ArrowUpDownIcon;
  readonly SwordsIcon = SwordsIcon;
  readonly DropletIcon = DropletIcon;

  playerTag: string | null = null;

  player?: Player;
  battleLogs: BattleLog[] = [];
  upcomingChests: UpcomingChests[] = [];

  badgeName: string = '';
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clashRoyaleService: ClashRoyaleService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe((params) => {
      this.playerTag = params.get('playerTag');
    });

    if (this.playerTag) {
      this.loading = true;
      this.clashRoyaleService.searchPlayer(this.playerTag).subscribe({
        next: (res) => {
          this.player = res;
        },
        error: () => this.router.navigate(['/404']),
      });
      this.clashRoyaleService.getBattleLog(this.playerTag).subscribe({
        next: (res) => (this.battleLogs = res),
      });
      this.clashRoyaleService.getUpcomingChests(this.playerTag).subscribe({
        next: (res) => {
          this.upcomingChests = res.items.filter(
            (chest) => chest.name !== 'Tower Troop Chest'
          );
        },
        complete: () => (this.loading = false),
      });
    } else {
      this.router.navigate(['/404']);
    }
  }

  formatBadgeName(name: string): string {
    return name.replace(/([A-Z])|(?<=\d)(?=\D)|(?<=\D)(?=\d)/g, ' $&').trim();
  }

  formatChestName(name: string): string {
    let formattedName: string;

    if (name === 'Golden Chest') {
      formattedName = 'chest-gold';
    } else if (name === 'Overflowing Gold Crate') {
      formattedName = 'chest-overflowgoldcrate';
    } else {
      const sanitizedName = name
        .replace(/(?:^|\s)Chest$/, '')
        .replace(/\s+/g, '')
        .toLowerCase();
      formattedName = `chest-${sanitizedName}`;
    }

    return formattedName;
  }

  getBadgeName(id: number | undefined): string {
    if (!id) {
      return 'no_clan';
    }
    const badge = badges.find((b) => b.id === id);
    if (badge) {
      return badge.name;
    } else {
      return 'no_clan';
    }
  }
}
