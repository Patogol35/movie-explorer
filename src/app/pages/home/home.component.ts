import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MovieCardComponent,
    SearchFilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filtered: any[] = [];
  isDark = true; // estado inicial del tema

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

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }
}
