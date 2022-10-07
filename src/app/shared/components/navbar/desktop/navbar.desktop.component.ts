import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy, ViewChild, Renderer2, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss']
})
export class NavbarDesktopComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy {

  @Input('title') title!: string;

  @Input('name') navbarName!: string;

  @Input('counter') counter!: number;

  @Output() counterOutput: EventEmitter<number> = new EventEmitter();

  counterLogList: string[] = [];

  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;

  constructor(
    private readonly renderer2: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.counterLogList.push(`Current value: ${changes["counter"].currentValue}`);
    this.counterLogList.push(`After value: ${changes["counter"].previousValue}`);
  }

  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.counter);
  }

  emitCounterValue(): void {
    this.counterOutput.emit(this.counter);
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
