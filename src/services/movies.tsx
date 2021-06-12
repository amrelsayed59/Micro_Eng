import { useEffect, useState } from "react";
import Axios from "axios";
import { useMainDispatch, useMainState } from "../context/gloabal";

const API_KEY: string = process.env.REACT_APP_API_KEY as string;

const useFetchMovies = (ListId: string[]) => {
  const dispatch = useMainDispatch();
  const useMain = useMainState();
  const [result, setResult] = useState([]);

  const requestMovie = async function () {
    ListId.forEach(async (element) => {
      try {
        const res = await Axios.get(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${element}`
        );
        dispatch({ type: "setMovie", payload: res.data });
      } catch (error) {
        console.log("Error", error);
      }
    });
  };

  useEffect(() => {
    dispatch({ type: "restMovie", payload: [] });
    requestMovie();
    setResult(useMain.ListMovie);
  }, []);

  return result;
};

export default useFetchMovies;
