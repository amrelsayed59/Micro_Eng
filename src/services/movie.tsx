const API_KEY: string = process.env.REACT_APP_API_KEY as string;

export const fetchMovie = async (id: any) => {
  return await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => console.log("error happened", error));
};
