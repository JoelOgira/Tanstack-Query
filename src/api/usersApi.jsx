import axios from "axios";

const usersApi = axios.create({
    baseURL: `http://localhost:3700`
});

export const getUsers = async () => {
    const response = await usersApi.get(`/users`);
    return response.data;
}

export const getUser = async (id) => {
    const response = await usersApi.get(`/users/${id}`);
    return response.data;
}

export const addUser = async (user) => {
    const response = await usersApi.post(`/users`, user);
    return response.data;
}

export const updateUser = async ({id, ...updatedUser}) => {
    const response = await usersApi.put(`/users/${id}`, updatedUser);
    return response.data;
}