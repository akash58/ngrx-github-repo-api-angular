import { Component, signal, isDevMode } from '@angular/core';
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
  protected readonly title = signal('ngrx-github-repo-angular');
  constructor(private store: Store, private themeService: ThemeService) {
    this.themeService.applyTheme();
  }
}
