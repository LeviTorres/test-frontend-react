import axios from "axios";

const API = "http://localhost:3000";

export const createUserRequest = user => axios.post(`${API}/users`, user);
