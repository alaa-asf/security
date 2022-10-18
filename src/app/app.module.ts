import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { sharedModule } from './shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InputWantedComponent } from './components/input-wanted/input-wanted.component';

@NgModule({
  declarations: [
    AppComponent,SearchComponent,HomeComponent,InputWantedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
