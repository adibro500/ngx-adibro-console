import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAdibroConsoleModule } from 'ngx-adibro-console';
import { NgxAdibroConsoleService } from 'ngx-adibro-console';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAdibroConsoleModule,
    FormsModule
  ],
  providers: [
    NgxAdibroConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
