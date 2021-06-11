const API_KEY = 'bbf5cbce';


export const fetchMovie = async (id: any) => {
  return await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  )
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => console.log("error happened", error));
};
