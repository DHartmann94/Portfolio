import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
