import React, { useEffect, useState } from "react";
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
  Title,
  Container,
  ActionIcon
} from "@mantine/core";
import { useNavigate, Link } from "react-router-dom";
import { IconLogout } from "@tabler/icons-react";
import { getTasksRequest } from "../api/task";

function TaskPage() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getTasksRequest();
        setDatos(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  return (
    <Container>
      <Box
        maw={440}
        mx="auto"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Title
          size="h1"
          style={{
            paddingBottom: "20px",
            paddingTop: "20px"
          }}
        >
          Tareas
        </Title>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Button>
            <Link to="/add-task"> Nueva tarea </Link>
          </Button>
          <ActionIcon
            onClick={logout}
            variant="filled"
            aria-label="Settings"
            style={{ marginLeft: "10px" }}
          >
            <IconLogout style={{ width: "70%", height: "100%" }} />
          </ActionIcon>
        </Box>
      </Box>
      <Box>
        <ul>
          {datos.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

export default TaskPage;
