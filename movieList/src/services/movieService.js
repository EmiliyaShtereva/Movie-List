import axios from "axios";

const baseUrl = 'http://localhost:3000/movies';

export const getOnePage = async (currentPage) => {
    const response = await axios.get(`${baseUrl}?_page=${currentPage}&_per_page=5`);
    const result = await response.data;
    return result;
}

export const getMovies = async () => {
    const response = await axios.get(baseUrl);
    const result = await response.data;
    return result;
}