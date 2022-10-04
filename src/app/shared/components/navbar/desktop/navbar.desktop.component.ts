import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss']
})
export class NavbarDesktopComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;

  constructor(
    private readonly renderer2: Renderer2) {}

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterContentInit(): void {
    console.log('ContentInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.navbar);
  }

  changeColor(): void {
    // this.renderer2.setStyle(.navbar.nativeElement, 'backgroundColor', 'red');
    this.renderer2.addClass(this.navbar.nativeElement, 'navbar-red');
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }
}
