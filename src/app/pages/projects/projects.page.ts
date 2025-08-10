import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule],
  template: `
  <div class="grid md:grid-cols-2 gap-6">
    <article class="card" *ngFor="let p of data()?.projects">
      <img *ngIf="p.image" [src]="p.image" alt="" class="w-full h-40 object-cover rounded-xl mb-4">
      <h3 class="font-semibold text-lg">{{p.title}}</h3>
      <p class="text-neutral-700 dark:text-neutral-300 mb-3">{{p.summary}}</p>
      <div class="flex flex-wrap gap-2 mb-3">
        <span *ngFor="let t of p.tags" class="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-sm">{{t}}</span>
      </div>
      <a *ngIf="p.link" [href]="p.link" target="_blank" rel="noopener" class="inline-block">View details →</a>
    </article>
  </div>
  `
})
export class ProjectsPage {
  private http = inject(HttpClient);
  data = signal<any>(null);
  constructor() { this.http.get('./assets/projects.json').subscribe(d => this.data.set(d)); }
}
