import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ClansComponent } from './clans/clans.component';
import { ClanDetailsComponent } from './clan-details/clan-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Royale Hub | Home',
  },
  {
    path: 'cards',
    component: CardsComponent,
    title: 'Royale Hub | Cards',
  },
  {
    path: 'clans',
    component: ClansComponent,
    title: 'Royale Hub | Clans',
  },
  {
    path: 'clans/:tag',
    component: ClanDetailsComponent,
    title: 'Royale Hub | Clan Details',
  },
];
