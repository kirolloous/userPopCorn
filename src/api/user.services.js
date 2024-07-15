import { api } from "./api";

const queryMovie = async (movieName,controller) => {
  try {
    
    const response = await api.get(
      `/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      {
        signal: controller.signal,
      }
    );
    return response.data.results
  } catch (error) {
    
  }
};

export { queryMovie };
