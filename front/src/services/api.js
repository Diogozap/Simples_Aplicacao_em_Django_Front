import axios from "axios";

const api = axios.create({
    baseURL: "https://simples-aplicacao-em-django.onrender.com",
});

export default api;
