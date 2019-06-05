import { NgModule } from '@angular/core';
import { NgxAdibroConsoleComponent } from './ngx-adibro-console.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxAdibroConsoleComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [NgxAdibroConsoleComponent]
})
export class NgxAdibroConsoleModule { }
