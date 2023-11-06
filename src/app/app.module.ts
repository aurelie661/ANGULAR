import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { CardComponent } from './components/card/card.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MovieFormComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
