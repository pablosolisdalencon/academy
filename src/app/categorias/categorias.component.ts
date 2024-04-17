import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  title = 'Categorias';
  subtitle = 'Agrupaciones por años';
  descripcion = 'Crea o edita tus categorias';
}
