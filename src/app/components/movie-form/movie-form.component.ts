import { Component , Output, EventEmitter} from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import Movie from 'src/app/models/movie/movie.module';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie = {
    id: 0,
    title: '',
    description: '',
  };

  @Output('movie')
  movieAdded = new EventEmitter<Movie>();

  addMovie(event: Event) {
    event.preventDefault();
    this.movieAdded.emit(this.movies);
    this.movies = {
      id: 0,
      title: '',
      description: '',
    };
  }
}
