import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarDesktopComponent } from '@shared/components/navbar/desktop/navbar.desktop.component';

@NgModule({
  declarations: [
    NavbarDesktopComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarDesktopComponent,
  ]
})
export class SharedModule { }
