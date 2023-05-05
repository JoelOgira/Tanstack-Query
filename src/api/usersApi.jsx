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
    return await usersApi.post(`/users`, user);
}

export const updateUser = async ({id, ...updatedUser}) => {
    return await usersApi.put(`/users/${id}`, updatedUser);
}

export const deleteUser = async ({id}) => {
    return await usersApi.delete(`/users/${id}`, id);
}