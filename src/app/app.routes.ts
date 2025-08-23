import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    data: { renderMode: 'prerender' } // ✅ se puede prerenderizar
  },
  { 
    path: 'movie/:id', 
    component: MovieDetailComponent,
    data: { renderMode: 'ssr' } // ✅ evita prerender y se sirve dinámico
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
