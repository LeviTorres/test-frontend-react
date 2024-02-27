import React from "react";
import { useForm } from "@mantine/form";
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
import { getTasksRequest } from "../api/task";
import { useNavigate, Link } from "react-router-dom";
import { IconLogout } from "@tabler/icons-react";
function TaskPage() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      ></Box>
    </Container>
  );
}

export default TaskPage;
