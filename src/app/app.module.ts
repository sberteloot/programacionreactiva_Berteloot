import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObsAsyncComponent } from './components/obs-async/obs-async.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsAsyncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
