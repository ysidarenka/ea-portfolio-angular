
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.page.html'
})
export class GalleryPage {
  private http = inject(HttpClient);
  data = signal<any>(null);
  modalOpen = signal(false);
  selectedImg = signal<any>(null);
  constructor() {
    this.http.get('./assets/gallery.json').subscribe(d => this.data.set(d));
    window.addEventListener('keydown', this.handleEsc);
  }
  openModal(img: any) {
    this.selectedImg.set(img);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }
  closeModal() {
    this.modalOpen.set(false);
    this.selectedImg.set(null);
    document.body.style.overflow = '';
  }
  handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.modalOpen()) {
      this.closeModal();
    }
  }
  ngOnDestroy() {
    window.removeEventListener('keydown', this.handleEsc);
  }
}
