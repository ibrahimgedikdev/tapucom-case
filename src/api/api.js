import axios from "axios";

const BASE = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
    const {data}  = await axios.get(`${BASE}/products`);
    return data;
};

export const fetchRegister = async (input) => {
    const {data} = await axios.post(`${BASE}/users`, input);
    return data;
};

export const fetchMe = async () => {
    const {data}  = await axios.get(`${BASE}/users`);
    return data;
};

export const isExistUser = async (email) => {
    const allUsers = await fetchUsers();
    return allUsers.find(user => user.email === email);
};

export const fetchUsers = async () => {
    const {data}  = await axios.get(`${BASE}/users`);
    return data;
};

export const fetchLogout = async () => {
    const { data } = await axios.post(`${BASE}/users`);

    return data;
};