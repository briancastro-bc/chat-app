import { Injectable } from '@angular/core';

import { LocalStorageService } from '@shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  hello(name: string): void {
    // name = 'lola'
    console.log(`Hello ${name}! It's our world :)`);
    const message: string = `Hello ${name}! It's our world :)`;
    this.localStorageService.set('message', message);
  }
}
