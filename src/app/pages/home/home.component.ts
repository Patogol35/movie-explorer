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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']   // 👈 ahora apunta al archivo css externo
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
