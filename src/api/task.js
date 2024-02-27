import axios from "axios";

const API = "http://localhost:3000";

export const getTasksRequest = tasks => axios.get(`${API}/tasks`, tasks);

export const createTasksRequest = task => axios.post(`${API}/tasks`, task);

export const getTaskByIdRequest = id => axios.get(`${API}/tasks/${id}`, task);

export const updateTaskRequest = task =>
  axios.put(`${API}/tasks/${task._id}`, task);

export const deleteTaskRequest = id => axios.delete(`${API}/tasks/${id}`);
