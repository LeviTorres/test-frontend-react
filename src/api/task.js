import axios from "axios";

const API = "http://localhost:3000";

export const getTasksRequest = tasks => axios.get(`${API}/tasks`, tasks);

export const createTasksRequest = task => axios.post(`${API}/tasks`, task);
