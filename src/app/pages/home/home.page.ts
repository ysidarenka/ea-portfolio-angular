
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.page.html'
})
export class HomePage {
  private http = inject(HttpClient);
  private router = inject(Router);
  site = signal<any>(null);
  constructor() { this.http.get('./assets/site.json').subscribe(s => this.site.set(s)); }
  goToProjects() {
    this.router.navigate(['/projects']);
  }
}
