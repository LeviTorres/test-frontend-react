import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/task/:id" element={<h1>Edit task</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
