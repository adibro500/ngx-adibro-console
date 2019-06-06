import { Component } from '@angular/core';
import { NgxAdibroConsoleService } from 'ngx-adibro-console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-adibro-terminal';
  constructor(public ngxAdibroConsoleService: NgxAdibroConsoleService) {
    this.ngxAdibroConsoleService.commandHandler.subscribe(command => {
      let result = (command.toLowerCase() === 'Date'.toLowerCase()) ? new Date().toString() : command;
      this.ngxAdibroConsoleService.sendResponse(result);
    })

  }
}
