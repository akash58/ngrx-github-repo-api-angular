import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private STORAGE_KEY = 'github_theme';
  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    this.loadTheme();
  }

  private saveTheme() {
    localStorage.setItem(this.STORAGE_KEY, this.currentTheme);
    this.applyTheme();
  }

  private loadTheme() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    this.currentTheme = stored === 'dark' ? 'dark' : 'light';
    this.applyTheme();
  }

  getTheme() {
    return this.currentTheme;
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    this.saveTheme();
  }

  applyTheme() {
    if (this.currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
