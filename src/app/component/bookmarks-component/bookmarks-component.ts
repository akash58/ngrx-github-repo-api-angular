import { Component } from '@angular/core';
import { BookmarkService } from '../../service/bookmark.service';

@Component({
  selector: 'app-bookmarks-component',
  standalone: false,
  templateUrl: './bookmarks-component.html',
  styleUrl: './bookmarks-component.scss'
})
export class BookmarksComponent {
  bookmarks: any[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  remove(repoId: number) {
    this.bookmarkService.removeBookmark(repoId);
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
}
