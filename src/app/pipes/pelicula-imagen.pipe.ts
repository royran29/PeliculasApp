import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {
    let img = 'http://image.tmdb.org/t/p/w300';

    if (pelicula.backdrop_path) {
      img += pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        img += pelicula.poster_path;
      } else {
        img = 'assets/img/noimage.jpg';
      }
    }
    return img;
  }

}
