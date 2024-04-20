import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  title = 'Categorias';
  subtitle = 'Agrupaciones por años';
  descripcion = 'Crea o edita tus categorias';
}
