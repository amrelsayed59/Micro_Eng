import React from "react";
import { Link } from "react-router-dom";

const List: React.FC<any> = ({ res }) => {
  return (
    <>
     
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${res.Poster})` }}
        key={res.imdbID}
      >
        <Link className="d-block w-100" to={{ pathname: `/${res.imdbID}` }}>
        <div className="color-overlay">
          <div className="movie-content">
            <div className="movie-header">
                <h1 className="movie-title">{res.Title}</h1>
              <h4 className="movie-info">
                ({res.Released}) {res.Genre}
              </h4>
            </div>
            <p className="movie-desc text-white">{res.Writer}</p>
          </div>
        </div>
        </Link>
      </div>
      
    </>
  );
};

export default List;
