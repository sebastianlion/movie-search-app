import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
      },
    });

    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      throw new Error("No movies found.");
    }
  } catch (error) {
    throw new Error("Error fetching movies.");
  }
};

export const fetchMoviesById = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });

    if (response.data.Response === "True") {
      return response.data;
    } else {
      throw new Error("No movies found.");
    }
  } catch (error) {
    throw new Error("Error fetching movies.");
  }
};
