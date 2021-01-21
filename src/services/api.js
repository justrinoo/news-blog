import axios from "axios";

process.env.localEndpoint = "http://localhost:5000";

export const localApi = axios.create({
	baseURL: process.env.localEndpoint,
});
