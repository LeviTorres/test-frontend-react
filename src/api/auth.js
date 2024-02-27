import axios from "axios";

const API = "http://localhost:3000";

export const loginRequest = token => axios.post(`${API}/login`, token);
