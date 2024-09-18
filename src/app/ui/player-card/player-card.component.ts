import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, StarIcon, TrophyIcon } from 'lucide-angular';
import { Player } from '../../models/clash-royale.interfaces';
import badges from '../../../assets/badges.json';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './player-card.component.html',
})
export class PlayerCardComponent {
  constructor() {}

  readonly StarIcon = StarIcon;
  readonly TrophyIcon = TrophyIcon;

  @Input() player!: Player;
  badgeName: string = '';

  ngOnInit() {
    this.setBadgeName();
  }

  setBadgeName() {
    const badge = badges.find((b) => b.id === this.player.clan?.badgeId);
    if (badge) {
      this.badgeName = badge.name;
    } else {
      this.badgeName = 'Unknown Badge';
    }
  }
}
