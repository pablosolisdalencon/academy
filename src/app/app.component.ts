import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcademiaComponent } from './academia/academia.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { PartidosComponent } from './partidos/partidos.component';
import { NominaComponent } from './nomina/nomina.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatMenuModule,AcademiaComponent,RouterOutlet,CategoriasComponent,JugadoresComponent,CampeonatosComponent,PartidosComponent,NominaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Talents';
  subtitle = 'Futbol';
  descripcion = 'Gestion de Teams';
  btncategorias = 'Categorias';
  btnprofesores = 'Profesores';
  btnjugadores = 'Jugadores';
  btnpartidos = 'Partidos';
  btnnominas = 'Nominas';
}
