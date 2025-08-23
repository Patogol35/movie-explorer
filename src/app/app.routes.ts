import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'movie/:id', 
    component: MovieDetailComponent,
    data: { renderMode: 'server' }   // 👈 evita prerender y usa SSR dinámico
  },
  { path: '**', redirectTo: '' }
];
