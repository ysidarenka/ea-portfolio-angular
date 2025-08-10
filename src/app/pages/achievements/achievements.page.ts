import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-achievements',
  imports: [CommonModule],
  template: `
  <div class="space-y-6">
    <section class="card">
      <h2 class="text-xl font-semibold mb-3">Awards</h2>
      <ul class="space-y-2">
        <li *ngFor="let a of data()?.awards">
          <div class="font-medium">{{a.title}}</div>
          <div class="text-sm text-neutral-500">{{a.org}} — {{a.year}}</div>
        </li>
      </ul>
    </section>
    <section class="card">
      <h2 class="text-xl font-semibold mb-3">Talks & Conferences</h2>
      <ul class="space-y-2">
        <li *ngFor="let t of data()?.talks">
          <div class="font-medium">{{t.title}}</div>
          <div class="text-sm text-neutral-500">{{t.event}} — {{t.year}}</div>
        </li>
      </ul>
    </section>
    <section class="card">
      <h2 class="text-xl font-semibold mb-3">Publications & Patents</h2>
      <ul class="space-y-2">
        <li *ngFor="let p of data()?.publications">
          <div class="font-medium">{{p.title}}</div>
          <div class="text-sm text-neutral-500">{{p.venue}} — {{p.year}}</div>
        </li>
      </ul>
    </section>
  </div>
  `
})
export class AchievementsPage {
  private http = inject(HttpClient);
  data = signal<any>(null);
  constructor() { this.http.get('./assets/achievements.json').subscribe(d => this.data.set(d)); }
}
