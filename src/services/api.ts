import axios from "axios";

let controller: AbortController | null = null;

export const api = axios.create({
    baseURL: "https://api.jikan.moe/v4",
});

api.interceptors.request.use((config) => {
    if (controller) controller.abort();
    controller = new AbortController();
    config.signal = controller.signal;
    return config;
});
