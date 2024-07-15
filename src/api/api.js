import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org",
  timeout: 2000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODY3ZjliNGQ4YmU0OTg4NTRkMjYzZjU0YjJiNDdmMSIsIm5iZiI6MTcyMDYzOTMyNy44ODU0NTcsInN1YiI6IjY2OGVkZWIyMmI2Y2I4MzkyYzE1ZTdkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.im5SxD1WF1o_U9wuvrsf8V4y_fg9E5B-RYW1KgrV-Bo",
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
