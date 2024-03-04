import axios from "axios";

const baseUrl = 'http://localhost:3000';

export const getFriends = async () => {
    const response = await axios.get(`${baseUrl}/friends`);
    const result = await response.data;
    return result;
}

export const getFriendGroups = async () => {
    const response = await axios.get(`${baseUrl}/friendGroups`);
    const result = await response.data;
    return result;
}