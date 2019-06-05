import { Component } from '@angular/core';
import { NgxAdibroConsoleService } from 'projects/ngx-adibro-console/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-adibro-terminal';
  constructor(public ngxAdibroConsoleService: NgxAdibroConsoleService) {
    this.ngxAdibroConsoleService.commandHandler.subscribe(command => {
      let result = (command.toLowerCase() === 'Date'.toLowerCase()) ? new Date() : command;
      this.ngxAdibroConsoleService.sendResponse(result);
    })

  }
}
