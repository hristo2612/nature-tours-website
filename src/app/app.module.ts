import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ImageShowcaseComponent } from './components/image-showcase/image-showcase.component';
import { AboutSectionComponent } from './components/main/components/about-section/about-section.component';
import { FeaturesSectionComponent } from './components/main/components/features-section/features-section.component';
import { ToursSectionComponent } from './components/main/components/tours-section/tours-section.component';
import { StoriesSectionComponent } from './components/main/components/stories-section/stories-section.component';
import { BgVideoComponent } from './components/bg-video/bg-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    ImageShowcaseComponent,
    AboutSectionComponent,
    FeaturesSectionComponent,
    ToursSectionComponent,
    StoriesSectionComponent,
    BgVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
