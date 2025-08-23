import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatChipsModule, MatIconModule],
  template: `
    <a class="card-link" [routerLink]="['/movie', movie?.id]" *ngIf="movie">
      <mat-card class="movie-card" appearance="outlined">
        <img mat-card-image [src]="movie.posterUrl" [alt]="movie.title" loading="lazy"/>
        <mat-card-content>
          <div class="title">{{ movie.title }} <span class="year">({{ movie.year }})</span></div>
          <div class="meta">
            <mat-chip-set aria-label="Géneros">
              <mat-chip *ngFor="let g of movie.genres" [disableRipple]="true">{{ g }}</mat-chip>
            </mat-chip-set>
            <div class="rating"><mat-icon>star</mat-icon> {{ movie.rating | number:'1.1-1' }}</div>
          </div>
        </mat-card-content>
      </mat-card>
    </a>
  `,
  styles: [`
    .card-link { text-decoration: none; color: inherit; }
    .movie-card { height: 100%; display: flex; flex-direction: column; }
    mat-card-content { padding: 0.75rem 1rem 1rem; }
    .title { font-weight: 600; margin-top: 0.25rem; }
    .year { opacity: 0.7; font-weight: 400; }
    .meta { margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: center; gap: .5rem; }
    mat-chip { font-size: 11px; }
    .rating { display: flex; align-items: center; gap: .25rem; font-weight: 600; }
    img { aspect-ratio: 2/3; object-fit: cover; }
  `]
})
export class MovieCardComponent {
  @Input() movie?: Movie;
}