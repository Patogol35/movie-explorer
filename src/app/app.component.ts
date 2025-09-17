import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    const html = document.querySelector('html');
    if (this.isDark) {
      html?.classList.add('dark-theme');
    } else {
      html?.classList.remove('dark-theme');
    }
  }
        }
