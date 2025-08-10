import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private http = inject(HttpClient);
  site = signal<any>(null);
  dark = signal<boolean>(false);
  menuOpen = false;

  constructor() {
    this.http.get('./assets/site.json').subscribe(site => this.site.set(site));
    const pref = localStorage.getItem('ea-theme');
    if (pref === 'dark') this.dark.set(true);
    document.documentElement.classList.toggle('dark', this.dark());
  }

  toggleTheme() {
    this.dark.update(v => !v);
    const isDark = this.dark();
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('ea-theme', isDark ? 'dark' : 'light');
  }
}
