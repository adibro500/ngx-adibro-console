# ngx-adibro-datetime-picker for Angular 7+

This is an angular component for emulating terminal/console.

## Installation
```
npm install --save ngx-adibro-console
```

# For demos please visit 

[demos](https://ngx-adibro-terminal-nibrutdlwm.now.sh/)


## Usage


### Inside app.module file import the component and service:

```
import { NgxAdibroConsoleModule, NgxAdibroConsoleService } from 'ngx-adibro-console';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ... ,
        NgxAdibroConsoleModule,
    ... ,
  ],
  providers: [
      NgxAdibroConsoleService
  ],
  bootstrap: [...]
})
export class AppModule { }

```
### In your HTML file you can do:

```
<ngx-adibro-console [width]="50" [height]="50" [welcomeMessage]="'Hello .....'" [promptMessage]="'Godamn $'" [clearAll]="true" [cacheCommands]="true"></ngx-adibro-console>
```
### You can then usre it in your component file like so:

```
export class AppComponent {
constructor(public ngxAdibroConsoleService: NgxAdibroConsoleService) {
    this.ngxAdibroConsoleService.commandHandler.subscribe(command => {
      let result = (command.toLowerCase() === 'Date'.toLowerCase()) ? new Date().toString() : command;
      this.ngxAdibroConsoleService.sendResponse(result);
    })

  }
}
```
Have fun !!!
