import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[HeaderComponent, UserInputComponent, OutputComponent]
})
export class AppComponent {}
