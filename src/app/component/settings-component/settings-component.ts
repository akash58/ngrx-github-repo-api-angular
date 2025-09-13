import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-settings-component',
  standalone: false,
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.scss'
})
export class SettingsComponent {
  name = 'John Doe';
  email = 'john.doe@example.com';
  theme: string;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
  }

  onThemeChange(event: any) {
    this.themeService.setTheme(event.target.value);
    this.theme = event.target.value;
  }
}
