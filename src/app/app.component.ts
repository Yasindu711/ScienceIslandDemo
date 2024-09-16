import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatIsScienceIslandComponent } from './what-is-science-island/what-is-science-island.component';
import { WhyUseScienceIslandComponent } from './why-use-science-island/why-use-science-island.component';
import { GlobalCollaborationComponent } from './global-collaboration/global-collaboration.component';  // Import the new component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WhatIsScienceIslandComponent,
    WhyUseScienceIslandComponent,
    GlobalCollaborationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Island';
}
