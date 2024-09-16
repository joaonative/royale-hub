import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ClansComponent } from './clans/clans.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'clans',
    component: ClansComponent,
  },
];
