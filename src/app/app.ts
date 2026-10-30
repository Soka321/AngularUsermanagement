import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AddUser } from './add-user/add-user';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root', 
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GatesAngularApp');
}
