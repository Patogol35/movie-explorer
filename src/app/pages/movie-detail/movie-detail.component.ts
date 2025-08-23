import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatChipsModule, MatButtonModule, MatIconModule],
  template: `
    <div class="wrapper" *ngIf="movieFound; else notFound">
      <button mat-button routerLink="/">
        <mat-icon>arrow_back</mat-icon>
        Volver
      </button>
      <div class="detail">
        <img [src]="movieFound.posterUrl" [alt]="movieFound.title"/>
        <div class="info">
          <h1>{{ movieFound.title }} <span>({{ movieFound.year }})</span></h1>
          <div class="chips">
            <mat-chip-set>
              <mat-chip *ngFor="let g of movieFound.genres">{{ g }}</mat-chip>
            </mat-chip-set>
          </div>
          <p class="overview">{{ movieFound.overview }}</p>
          <p class="rating"><mat-icon>star</mat-icon> {{ movieFound.rating | number:'1.1-1' }} / 10</p>
        </div>
      </div>
    </div>
    <ng-template #notFound>
      <div class="not-found">
        <p>Película no encontrada.</p>
        <a mat-button color="primary" routerLink="/">Ir al inicio</a>
      </div>
    </ng-template>
  `,
  styles: [`
    .wrapper { max-width: 1100px; margin: 1rem auto; padding: 0 1rem 2rem; display: grid; gap: 1rem; }
    .detail { display: grid; grid-template-columns: 300px 1fr; gap: 2rem; align-items: flex-start; }
    img { width: 100%; border-radius: 12px; object-fit: cover; box-shadow: 0 6px 20px rgba(0,0,0,.2); }
    .info h1 { margin: 0; line-height: 1.2; }
    .info h1 span { opacity: 0.7; font-weight: 400; }
    .overview { margin: 1rem 0; opacity: .95; }
    .rating { display: flex; align-items: center; gap: .25rem; font-weight: 600; }
    .chips { margin: .5rem 0 1rem; }
    .not-found { text-align: center; margin-top: 3rem; }
    @media (max-width: 900px) { .detail { grid-template-columns: 1fr; } }
  `]
})
export class MovieDetailComponent implements OnInit {
  movieFound: any;
  constructor(private route: ActivatedRoute, private movieService: MovieService) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieFound = this.movieService.getById(id);
  }
}