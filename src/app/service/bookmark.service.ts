import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private STORAGE_KEY = 'github_bookmarks';
  private bookmarks: any[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private saveToStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.bookmarks));
  }

  private loadFromStorage() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    this.bookmarks = data ? JSON.parse(data) : [];
  }

  getBookmarks() {
    return this.bookmarks;
  }

  addBookmark(repo: any) {
    if (!this.isBookmarked(repo.id)) {
      this.bookmarks.push(repo);
      this.saveToStorage();
    }
  }

  removeBookmark(id: number) {
    this.bookmarks = this.bookmarks.filter(r => r.id !== id);
    this.saveToStorage();
  }

  isBookmarked(id: number): boolean {
    return this.bookmarks.some(r => r.id === id);
  }
}
