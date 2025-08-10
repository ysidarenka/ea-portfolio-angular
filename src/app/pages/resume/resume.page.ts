import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.page.html',
})
export class ResumePage {
  private http = inject(HttpClient);
  data = signal<any>(null);
  constructor() { this.http.get('./assets/resume.json').subscribe(d => this.data.set(d)); }
}
