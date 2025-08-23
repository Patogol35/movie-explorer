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
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  template: `
    <div class="toolbar">
      <mat-form-field appearance="outline" class="search">
        <mat-label>Buscar película</mat-label>
        <input matInput [(ngModel)]="query" (ngModelChange)="emit()" placeholder="Ej: Solaris" />
        <button matSuffix mat-icon-button aria-label="clear" *ngIf="query" (click)="clear()">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      <mat-form-field appearance="outline" class="genre">
        <mat-label>Género</mat-label>
        <mat-select [(ngModel)]="genre" (selectionChange)="emit()">
          <mat-option [value]="''">Todos</mat-option>
          <mat-option *ngFor="let g of genres()" [value]="g">{{ g }}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styles: [`
    .toolbar { display: grid; grid-template-columns: 1fr 220px; gap: 1rem; align-items: center; }
    @media (max-width: 700px) { .toolbar { grid-template-columns: 1fr; } }
    .search { width: 100%; }
    .genre { width: 100%; }
  `]
})
export class SearchFilterComponent {
  @Output() changed = new EventEmitter<{ query: string; genre: string }>();
  query = '';
  genre = '';
  // Permite setear la lista de géneros desde el padre
  private _genres = signal<string[]>([]);
  genres = computed(() => this._genres());
  setGenres(genres: string[]) { this._genres.set(genres); }
  emit() { this.changed.emit({ query: this.query.trim(), genre: this.genre }); }
  clear() { this.query = ''; this.emit(); }
}