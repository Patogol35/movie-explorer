import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MovieCardComponent,
    MovieDetailComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isDark = false;
  movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', description: 'A dream within a dream.' },
    { id: 2, title: 'Interstellar', genre: 'Adventure', description: 'Space exploration and time.' },
    { id: 3, title: 'The Dark Knight', genre: 'Action', description: 'Batman vs Joker.' },
  ];
  selectedMovie: any = null;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDark = this.themeService.loadTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeService.toggleTheme(this.isDark);
  }

  showDetails(movie: any) {
    this.selectedMovie = movie;
  }

  closeDetails() {
    this.selectedMovie = null;
  }
}
