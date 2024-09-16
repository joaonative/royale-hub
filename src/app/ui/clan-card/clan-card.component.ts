import { Component, Input } from '@angular/core';
import { Clan } from '../../models/clash-royale.interfaces';
import badges from '../../../assets/badges.json';
import {
  LucideAngularModule,
  UsersIcon,
  MapPinIcon,
  CircleAlertIcon,
  TrophyIcon,
} from 'lucide-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clan-card',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './clan-card.component.html',
})
export class ClanCardComponent {
  readonly UsersIcon = UsersIcon;
  readonly MapPinIcon = MapPinIcon;
  readonly CircleAlertIcon = CircleAlertIcon;
  readonly TrophyIcon = TrophyIcon;

  @Input() clan!: Clan;
  badgeName: string = '';

  ngOnInit() {
    this.setBadgeName();
  }

  setBadgeName() {
    const badge = badges.find((b) => b.id === this.clan.badgeId);
    if (badge) {
      this.badgeName = badge.name;
    } else {
      this.badgeName = 'Unknown Badge';
    }
  }
}
