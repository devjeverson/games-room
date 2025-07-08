import { Component } from '@angular/core';
import { GameListComponent } from './components/game-list/game-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'games-room';
}
