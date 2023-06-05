import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    IntroductionComponent,
    MainComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
