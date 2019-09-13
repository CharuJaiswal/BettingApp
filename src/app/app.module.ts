import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HostlisnerComponent } from './components/hostlisner/hostlisner.component';

@NgModule({
  declarations: [
    AppComponent,

    HostlisnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
