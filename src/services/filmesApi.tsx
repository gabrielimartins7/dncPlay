import api from "./api";

const apiKey = "api_key=26a5acde3c85f147265aab9ba1dd1b77";
const language = "language=pt-BR";

export const getFilms = (page) => {
  const url = `trending/movie/week?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};

export const getFilmsNowPlaying = (page) => {
  const url = `movie/now_playing?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};

export const getGenders = (page) => {
  const url = `discover/movie?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};
