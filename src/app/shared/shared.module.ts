import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MATERIAL_IMPORT } from '../pages/material-import';
import { CommonModule } from '@angular/common';

const SHARED_MODULE = [HeaderComponent, FooterComponent, PageNotFoundComponent];

@NgModule({
  declarations: [...SHARED_MODULE],
  imports: [...MATERIAL_IMPORT, CommonModule],
  exports: [...SHARED_MODULE],
})
export class SharedModule {}
