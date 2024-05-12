import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  // Authorization: "bearer  + TMDB_TOKEN",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjI3ZDcyMzhlNGQzODgwZjhkOTBjMTgyMTdmMTFhMCIsInN1YiI6IjY2MzllNWIyMmZhZjRkMDEyYWM2ZmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6FqtgqvRJeXu3JJzvxyaQXXHL9j_U0X8bcEtjdi1Xc",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
