import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { SessionStorageComponent } from './session-storage/session-storage.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionStorageComponent,
    LocalStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
