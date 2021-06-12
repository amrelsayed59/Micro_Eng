import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../../services/movie";
import Details from "./Details";

export interface Id {
  id: string;
}

const Index: React.FC<any> = () => {
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

  return (
    <>
      <Details movie={movie} loading={loading} error={error} />
    </>
  );
};

export default Index;
