import useFetchMovies from "../../services/movies";
import List from "./List";

const Movies: React.FC<any> = () => {
  //list imdbIds
  const listId = [
    "tt0111161",
    "tt0068646",
    "tt0468569",
    "tt0071562",
    "tt0050083",
    "tt0167260",
    "tt0110912",
    "tt0108052",
    "tt1375666",
    "tt0137523",
    "tt0120737",
    "tt0109830",
    "tt0060196",
    "tt12361178",
    "tt0167261",
    "tt0133093",
    "tt0099685",
    "tt0080684",
    "tt0073486",
    "tt6751668",
  ];

  //fetch movies from context
  const fetchMovies = useFetchMovies(listId);

  const AllMovies = fetchMovies.map((res: any) => (
    <List res={res} key={res.imdbID} />
  ));

  return (
    <>
      <div className="movie-section">
        <div id="movie-card-list movie_list">{AllMovies}</div>
      </div>
    </>
  );
};

export default Movies;
