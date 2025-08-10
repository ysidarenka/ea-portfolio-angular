import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume.page').then(m => m.ResumePage) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects.page').then(m => m.ProjectsPage) },
  { path: 'achievements', loadComponent: () => import('./pages/achievements/achievements.page').then(m => m.AchievementsPage) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.page').then(m => m.GalleryPage) },
  { path: '**', redirectTo: '' }
];
