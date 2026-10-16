export interface Comment {
  id: number;
  username: string;
  text: string;
  rating: number;
}

export interface Movie {
  id: number;
  title: string;
  language: string;
  genre: string[];
  releaseYear: number;
  rating: number;
  comments: Comment[];
  description: string;
  director: string;
  duration: number;
  image: string;
  poster: string;
}
