
// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "<https://api.unsplash.com/>";

export const fetchImagesWithSearch = async search => {
    const response = axios.get(`/search/photos?client_id=LvIdGNzCPpFilw_7q1bmj5sN1bc22UrHhJ1_IQm2l-U&query=${search}`);
    return response.data.hits;
};
