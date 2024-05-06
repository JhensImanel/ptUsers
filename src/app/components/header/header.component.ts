import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup(
      {
        name: new FormControl('', {}),
      },
      []
    ); // campos y variaciones
  }

  // función que no recive parametros y no devuelve nada
  getData(): void {
    console.log(this.searchForm.value); // capturar los datos del formulario
  }
}
