import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MATERIAL_IMPORT } from './pages/material-import';
const SHARED_COMPONENT = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [AppComponent, ...SHARED_COMPONENT],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MATERIAL_IMPORT,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
