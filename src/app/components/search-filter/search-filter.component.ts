import { Component, EventEmitter, Output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() changed = new EventEmitter<{ query: string; genre: string }>();

  query = '';
  genre = '';

  // Permite setear la lista de géneros desde el padre
  private _genres = signal<string[]>([]);
  genres = computed(() => this._genres());

  setGenres(genres: string[]) {
    this._genres.set(genres);
  }

  emit() {
    this.changed.emit({ query: this.query.trim(), genre: this.genre });
  }

  clear() {
    this.query = '';
    this.emit();
  }
}
