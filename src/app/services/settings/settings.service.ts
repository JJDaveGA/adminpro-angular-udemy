import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  adjusments: Adjusments = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(
    @Inject(DOCUMENT) private _document
  ) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('adjusments', JSON.stringify(this.adjusments));
  }

  loadSettings() {
    if (localStorage.getItem('adjusments')) {
      this.adjusments = JSON.parse(localStorage.getItem('adjusments'));
      this.applyTheme(this.adjusments.theme);
    } else {
      this.applyTheme(this.adjusments.theme);
    }
  }

  applyTheme(theme: string) {
    let themeUrl: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', themeUrl);
    // Save de settings in localStorage
    this.adjusments.theme = theme;
    this.adjusments.themeUrl = themeUrl;
    this.saveSettings();
  }
}

interface Adjusments {
  themeUrl: string;
  theme: string;
}
