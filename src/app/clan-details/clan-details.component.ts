import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { ClanDetails } from '../models/clash-royale.interfaces';
import { Router } from '@angular/router';
import { LoadingComponent } from '../ui/loading/loading.component';
import badges from '../../assets/badges.json';
import {
  LucideAngularModule,
  UsersIcon,
  MapPinIcon,
  CircleAlertIcon,
  TrophyIcon,
  InfoIcon,
  HandCoinsIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-clan-details',
  standalone: true,
  imports: [LoadingComponent, LucideAngularModule],
  templateUrl: './clan-details.component.html',
})
export class ClanDetailsComponent {
  readonly UsersIcon = UsersIcon;
  readonly MapPinIcon = MapPinIcon;
  readonly CircleAlertIcon = CircleAlertIcon;
  readonly TrophyIcon = TrophyIcon;
  readonly Infoicon = InfoIcon;
  readonly HandCoinsIcon = HandCoinsIcon;

  clanTag: string | null = null;

  clan?: ClanDetails;
  badgeName: string = '';

  sortOrder: 'asc' | 'desc' = 'desc';

  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clashRoyaleService: ClashRoyaleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clanTag = params.get('clanTag');
    });

    if (this.clanTag) {
      this.loading = true;
      this.clashRoyaleService.getClanByTag(this.clanTag).subscribe({
        next: (res) => {
          this.clan = res;
          const badge = badges.find((b) => b.id === this.clan?.badgeId);
          if (badge) {
            this.badgeName = badge.name;
          } else {
            this.badgeName = 'Unknown Badge';
          }
        },
        error: () => this.router.navigate(['/404']),
        complete: () => ((this.loading = false), this.sortMembers()),
      });
    } else {
      this.router.navigate(['/404']);
    }
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    this.sortMembers();
  }

  sortMembers(): void {
    this.clan?.memberList.sort((a, b) => {
      return this.sortOrder === 'desc'
        ? a.clanRank - b.clanRank
        : b.clanRank - a.clanRank;
    });
  }
}
