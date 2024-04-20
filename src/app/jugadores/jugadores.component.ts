import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent {

}
