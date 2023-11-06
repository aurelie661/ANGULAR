class Movie{
  public static count=0
  id: number
  constructor(
      public title: string,
      public description: string,
  ){
      this.id = ++ Movie.count
  }
}
export  default Movie
