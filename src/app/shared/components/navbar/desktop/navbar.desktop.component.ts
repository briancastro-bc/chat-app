import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy, ViewChild, Renderer2, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { ThemeService, ThemeType } from '@shared/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss']
})
export class NavbarDesktopComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy {

  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;

  constructor(
    private readonly renderer2: Renderer2,
    private themeService: ThemeService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  changeTheme(): void {
    this.themeService.toggleTheme();
  }

  ngAfterContentInit(): void {
    console.log('ContentInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.navbar);
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }

  get theme$(): Observable<ThemeType> {
    return this.themeService.theme$;
  }
}
