import { Component } from '@angular/core';
import { ClashRoyaleService } from '../services/clash-royale.service';
import { Clan, Location, SearchClan } from '../models/clash-royale.interfaces';
import { ClanCardComponent } from '../ui/clan-card/clan-card.component';
import { LoadingComponent } from '../ui/loading/loading.component';
import {
  LucideAngularModule,
  SearchIcon,
  ArrowDownIcon,
  Trash2Icon,
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clans',
  standalone: true,
  imports: [
    ClanCardComponent,
    LoadingComponent,
    LucideAngularModule,
    FormsModule,
  ],
  templateUrl: './clans.component.html',
})
export class ClansComponent {
  constructor(private clashRoyaleService: ClashRoyaleService) {}

  readonly SearchIcon = SearchIcon;
  readonly ArrowDownIcon = ArrowDownIcon;
  readonly Trash2Icon = Trash2Icon;

  locations: Location[] = [];

  formValues: SearchClan = {
    term: '',
    location: 57000006,
    minMembers: 2,
    maxMembers: 50,
    minScore: 1,
    maxScore: 90000,
  };

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

  resultClans: Clan[] = [];

  loadingSearch: boolean = false;
  loading: boolean = false;

  error: string = '';

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
    this.clashRoyaleService.getLocations().subscribe({
      next: (res) => {
        this.locations = res.items;
      },
    });
  }
  onSubmit() {
    this.error = '';
    if (this.formValues.term.length >= 1 && this.formValues.term.length < 3) {
      this.error = 'Name or tag should be at least 3 caracters long';
      return;
    }
    this.loadingSearch = true;
    this.clashRoyaleService.searchClan(this.formValues).subscribe({
      next: (res) => {
        this.resultClans = res.items;
        if (res.items.length === 0)
          this.error =
            'No clans found, please check back later or try a different search!';
      },
      error: (err) => console.error('Search Clan Error: ', err),
      complete: () => (this.loadingSearch = false),
    });
  }

  clearResults() {
    this.resultClans = [];
    this.formValues = {
      term: '',
      location: 57000006,
      minMembers: 2,
      maxMembers: 50,
      minScore: 1,
      maxScore: 90000,
    };
  }
}
