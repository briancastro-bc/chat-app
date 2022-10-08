import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalStorageService } from '@shared/services/local-storage.service';

export type ThemeType = "light-theme" | "dark-theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeSubject$: BehaviorSubject<ThemeType> = new BehaviorSubject<ThemeType>(null!);

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly localStorageService: LocalStorageService,
  ) {}

  initialize(): void {
    if (!this.currentTheme) {
      const userTheme = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)');
      console.log(`Is dark theme prefered for user: ${userTheme?.matches}`);
      if (userTheme?.matches) {
        this.localStorageService.set('user_theme', 'dark-theme');
      } else {
        this.localStorageService.set('user_theme', 'light-theme');
      }
      this.themeSubject$.next(this.currentTheme);
    }
    this.document.body.classList.add(this.currentTheme);
  }

  toggleTheme(): void {
    // Condicional ternario: condicion ? true : false;
    const theme: ThemeType = this.currentTheme == 'dark-theme' ? 'light-theme' : 'dark-theme';
    switch (theme) {
      case 'dark-theme': {
        this.document.body.classList.remove('light-theme');
        this.document.body.classList.add('dark-theme');
        this.localStorageService.set('user_theme', 'dark-theme');
        break;
     }
      case 'light-theme': {
        this.document.body.classList.remove('dark-theme');
        this.document.body.classList.add('light-theme');
        this.localStorageService.set('user_theme', 'light-theme');
        break;
      }
    }
  }

  get currentTheme(): ThemeType {
    const theme = this.localStorageService.get("user_theme").value as ThemeType;
    return theme;
  }

  get theme$(): Observable<ThemeType> {
    this.themeSubject$.next(this.currentTheme);
    return this.themeSubject$.asObservable();
  }
}
