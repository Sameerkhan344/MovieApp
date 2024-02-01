import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDNhZmRmZTAzYjc2YmU2MTIyODRkZTg5ODA3N2Y4ZSIsInN1YiI6IjY0YmVhN2MxNThlZmQzMDBlMmYyYjc0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AsGJ3zCRTRxL00nEivkiJji_Eor80PMaWO2BCfmB2OM"; //import token here fron .env file

const headers = {
  Authorization: TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchDataFromApi;
