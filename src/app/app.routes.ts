import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ClansComponent } from './clans/clans.component';
import { ClanDetailsComponent } from './clan-details/clan-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Royale Hub | Home',
  },
  {
    path: '404',
    component: NotFoundComponent,
    title: 'Royale Hub | Not Found',
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
    path: 'clans/:clanTag',
    component: ClanDetailsComponent,
    title: 'Royale Hub | Clan Details',
  },
  {
    path: 'players',
    component: PlayersComponent,
    title: 'Royale Hub | Players',
  },
  {
    path: 'players/:playerTag',
    component: PlayersComponent,
    title: 'Royale Hub | Player Details',
  },
];
