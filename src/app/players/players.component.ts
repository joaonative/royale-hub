import { Component } from '@angular/core';
import {
  LucideAngularModule,
  SearchIcon,
  ArrowDownIcon,
  Trash2Icon,
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../ui/loading/loading.component';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { Player, SearchPlayer } from '../models/clash-royale.interfaces';
import { PlayerCardComponent } from '../ui/player-card/player-card.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    PlayerCardComponent,
    LoadingComponent,
    LucideAngularModule,
    FormsModule,
  ],
  templateUrl: './players.component.html',
})
export class PlayersComponent {
  readonly SearchIcon = SearchIcon;
  readonly ArrowDownIcon = ArrowDownIcon;
  readonly Trash2Icon = Trash2Icon;

  locations: Location[] = [];

  formValues: SearchPlayer = {
    tag: '',
  };

  loading: boolean = false;
  loadingSearch: boolean = false;

  resultPlayer: Player = {
    name: '',
    expLevel: 0,
    rank: 0,
    tag: '',
    clan: {
      badgeId: 0,
      name: '',
      tag: '',
    },
    eloRating: 0,
  };

  error: string = '';

  featuredPlayers: {
    unitedStates: Player[];
    brazil: Player[];
    germany: Player[];
    japan: Player[];
    china: Player[];
  } = {
    unitedStates: [],
    brazil: [],
    germany: [],
    japan: [],
    china: [],
  };

  constructor(private clashRoyaleService: ClashRoyaleService) {}

  ngOnInit(): void {
    this.loading = true;
    this.clashRoyaleService.getFeaturedPLayers().subscribe({
      next: (res) => {
        this.featuredPlayers = {
          unitedStates: res.unitedStates.items,
          brazil: res.brazil.items,
          germany: res.germany.items,
          japan: res.japan.items,
          china: res.china.items,
        };
      },
      error: (err) => console.log('Get FeaturedPlayers', err),
      complete: () => (this.loading = false),
    });
  }

  onSubmit() {
    this.error = '';
    this.loadingSearch = true;
    this.clashRoyaleService
      .searchPlayer(this.formValues.tag.toUpperCase())
      .subscribe({
        next: (res) => (this.resultPlayer = res),
        error: (err) => {
          this.loadingSearch = false;
          this.error =
            'Player not found, please check back later or try a different search!';
          console.log('Searching Player Error', err);
        },
        complete: () => (this.loadingSearch = false),
      });
  }

  clearResults() {
    this.formValues = {
      tag: '',
    };

    this.resultPlayer = {
      name: '',
      expLevel: 0,
      rank: 0,
      tag: '',
      clan: {
        badgeId: 0,
        name: '',
        tag: '',
      },
      eloRating: 0,
    };
  }
}
