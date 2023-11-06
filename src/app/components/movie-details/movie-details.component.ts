import { Component,Input } from '@angular/core';
import Movie from 'src/app/models/movie/movie.module';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  newMovie: Movie[] = []
  @Input()
  movies: Movie[] = []

  onDelete(index: number){
    this.movies.splice(index,1)
    }
}
