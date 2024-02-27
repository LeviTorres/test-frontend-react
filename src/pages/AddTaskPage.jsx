import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  Textarea,
  Title,
  ActionIcon
} from "@mantine/core";
import { createTasksRequest } from "../api/task";
import { IconLogout } from "@tabler/icons-react";
import { useNavigate, Link } from "react-router-dom";
function AddTaskPage() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const form = useForm({
    initialValues: {
      title: "",
      description: ""
    },
    validate: {
      title: (value) => (value.length < 1 ? "Titulo es requerido" : null),
      description: (value) =>
        value.length < 1 ? "Descripcion es requerida" : null
    }
  });

  return (
    <Box maw={340} mx="auto">
      <Box
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
          Nueva tarea
        </Title>
        <ActionIcon
          onClick={logout}
          variant="filled"
          aria-label="Settings"
          style={{ marginLeft: "10px" }}
        >
          <IconLogout style={{ width: "70%", height: "100%" }} />
        </ActionIcon>
      </Box>
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            await createTasksRequest(values);
            navigate("/tasks");
          } catch (error) {
            console.log(error.response.data.msg);
            alert(`${error.response.data.msg}`);
          }
        })}
      >
        <TextInput
          withAsterisk
          label="Titulo"
          placeholder="Escribe el titulo de tu tarea"
          {...form.getInputProps("title")}
        />
        <Textarea
          withAsterisk
          label="Descripción"
          placeholder="Escribe la descripción"
          {...form.getInputProps("description")}
        />
        <Group
          style={{ justifyContent: "space-between" }}
          justify="flex-end"
          mt="md"
        >
          <Link to="/tasks">Regresar</Link>
          <Button type="submit">Crear</Button>
        </Group>
      </form>
    </Box>
  );
}

export default AddTaskPage;
