import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MovieCardComponent, SearchFilterComponent],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span class="logo">🎬 Movie Explorer</span>
      <span class="logo">Proyecto desarrollado por Jorge Patricio Santamaría Cherrez</span>
    </mat-toolbar>
    <div class="container">
      <app-search-filter (changed)="onFilter($event)" #sf></app-search-filter>
      <div class="grid">
        <app-movie-card *ngFor="let m of filtered" [movie]="m"></app-movie-card>
      </div>
      <p class="empty" *ngIf="filtered.length === 0">No se encontraron resultados.</p>
    </div>
  `,
  styles: [`
    .toolbar { position: sticky; top: 0; z-index: 10; }
    .logo { font-weight: 700; letter-spacing: .3px; }
    .container { max-width: 1100px; margin: 1rem auto; padding: 0 1rem 2rem; display: grid; gap: 1rem; }
    .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
    @media (max-width: 1200px) { .grid { grid-template-columns: repeat(5, 1fr); } }
    @media (max-width: 1000px) { .grid { grid-template-columns: repeat(4, 1fr); } }
    @media (max-width: 800px) { .grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 600px) { .grid { grid-template-columns: repeat(2, 1fr); } }
    .empty { opacity: .8; text-align: center; margin-top: 2rem; }
  `]
})
export class HomeComponent implements OnInit {
  filtered: any[] = [];
  @ViewChild('sf') searchFilter?: SearchFilterComponent;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.filtered = this.movieService.movies();
    const genres = this.movieService.getAllGenres();
    setTimeout(() => this.searchFilter?.setGenres(genres));
  }
  onFilter({ query, genre }: { query: string; genre: string }) {
    const q = query.toLowerCase();
    const all = this.movieService.movies();
    this.filtered = all.filter(m => {
      const byTitle = m.title.toLowerCase().includes(q);
      const byGenre = !genre || m.genres.includes(genre);
      return byTitle && byGenre;
    });
  }
}
