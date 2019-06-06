import { NgModule } from '@angular/core';
import { NgxAdibroConsoleComponent } from './ngx-adibro-console.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxAdibroConsoleService } from './ngx-adibro-console.service';

@NgModule({
  declarations: [NgxAdibroConsoleComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NgxAdibroConsoleService],
  exports: [NgxAdibroConsoleComponent, NgxAdibroConsoleService]
})
export class NgxAdibroConsoleModule { }
