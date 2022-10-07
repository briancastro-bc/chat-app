import { Component } from '@angular/core';

import { ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';

  lola: string = "lola";

  counter: number = 0;

  constructor(
    private themeService: ThemeService,
  ) {}

  sum(): void {
    this.counter++;
    this.themeService.hello('Lola');
  }

  odd(): void {
    this.counter--;
  }

  counterValue(value: number): void {
    console.log(value);
    if(typeof value == "string") {
      console.log(`Value es un string`);
    }
  }
}
