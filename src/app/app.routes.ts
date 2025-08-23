import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, renderMode: 'prerender' }, // Home se prerenderiza
  { path: 'movie/:id', component: MovieDetailComponent, renderMode: 'server' }, // Rutas dinámicas en modo server
  { path: '**', redirectTo: '' }
];
