import axios from "axios";

const baseUrl = 'http://localhost:3000/friends';

export const getFriends = async () => {
    const response = await axios.get(baseUrl);
    const result = await response.data;
    return result;
}