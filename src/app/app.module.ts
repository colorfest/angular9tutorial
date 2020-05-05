import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresidentDemoComponent } from './components/president-demo/president-demo.component';
import { PresidentsComponent } from './components/presidents/presidents.component';

@NgModule({
  declarations: [
    AppComponent,
    PresidentDemoComponent,
    PresidentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
