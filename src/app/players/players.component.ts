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

  resultPlayer: [] = [];

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
        console.log(res.brazil.items);
      },
      error: (err) => console.log('Get FeaturedPlayers', err),
      complete: () => (this.loading = false),
    });
  }

  onSubmit() {
    console.log(this.formValues);
  }

  clearResults() {
    this.formValues = {
      tag: '',
    };

    this.resultPlayer = [];
  }
}
