import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkMode = true;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme', this.darkMode);
    document.body.classList.toggle('light-theme', !this.darkMode);
  }
}
