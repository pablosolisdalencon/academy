import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { PartidosComponent } from './partidos/partidos.component';
import { NominaComponent } from './nomina/nomina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CategoriasComponent,JugadoresComponent,CampeonatosComponent,PartidosComponent,NominaComponent],
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
