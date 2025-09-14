import { Component, signal, isDevMode, HostListener } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import * as GithubActions from '../app/store/github.actions';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  isSidebarOpen = false;
  isLargeScreen = false;

  constructor(private themeService: ThemeService) {
    this.themeService.applyTheme();
  }

  ngOnInit(): void {
    this.checkScreen();
  }

  // Recompute on resize
  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  private checkScreen() {
    // Bootstrap 'lg' breakpoint = 992px
    this.isLargeScreen = window.innerWidth >= 992;
    // If large screen, keep sidebar always open (content pushed)
    if (this.isLargeScreen) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }
  }

  toggleSidebar() {
    // only toggle overlay mode on small screens
    if (!this.isLargeScreen) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  closeSidebarOnBackdrop() {
    if (!this.isLargeScreen) {
      this.isSidebarOpen = false;
    }
  }
}
