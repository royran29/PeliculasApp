import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar = '';

  constructor(public _ps: PeliculasService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }

    });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }

    this._ps.buscarPelicula(this.buscar).subscribe();

  }

}
