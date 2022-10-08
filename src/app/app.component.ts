import { Component, OnInit } from '@angular/core';

import { ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  counter: number = 0;

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.themeService.initialize();
  }

  sum(): void {
    this.counter++;
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
