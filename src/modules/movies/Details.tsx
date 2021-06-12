import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../services/movie";
import { useHistory } from "react-router-dom";
import { InnerLoader } from "../../components/Loader";
import NotFound from "../../components/NotFound";

export interface Id {
  id: string;
}

const Details = () => {
  const history = useHistory();
  const [movie, setMovie] = useState<any>({});
  const [error, setError] = useState(false);
  const { id } = useParams<Id>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await fetchMovie(id);
      if (data?.Response === "True") {
        setMovie(data);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    fetchMovies();
  }, [id]);

  return loading ? (
    <InnerLoader />
  ) : error ? (
    <NotFound />
  ) : (
    <>
      <div className="movie-details">
        <div className="movie-description">
          <h3 className="title">{movie.Title}</h3>

          <div className="title-data-info-item item-starring">
            <span className="title-data-info-item-label">Actor:</span>
            <span className="title-data-info-item-list">{movie.Actors}</span>
          </div>
          <div className="title-data-info-item item-starring">
            <span className="title-data-info-item-label">Director:</span>
            <span className="title-data-info-item-list">{movie.Director}</span>
          </div>
          <h3 className="story">{movie.Plot}</h3>
          <div className="title-data-info-item item-starring">
            <span className="title-data-info-item-label">Language:</span>
            <span className="title-data-info-item-list">{movie.Language}</span>
          </div>
          <div className="title-data-info-item item-starring">
            <span className="title-data-info-item-label">BoxOffice:</span>
            <span className="title-data-info-item-list">{movie.BoxOffice}</span>
          </div>
          <div className="title-data-info-item item-starring">
            <span className="title-data-info-item-label">Awards:</span>
            <span className="title-data-info-item-list">{movie.Awards}</span>
          </div>

          <button
            type="button"
            className="back-btn"
            onClick={() => history.push("../")}
          >
            Back
          </button>
        </div>
        <div className="movie-img">
          <img src={movie.Poster} alt="movie_image" />
        </div>
      </div>
    </>
  );
};

export default Details;
