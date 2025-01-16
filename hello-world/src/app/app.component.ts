import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOverviewByCliComponent } from "./component-overview-by-cli/component-overview-by-cli.component";
import { ComponentOverviewByHandling } from "./component-overview-by-handling/component-overview-by-handling";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentOverviewByCliComponent, ComponentOverviewByHandling],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world';
}
