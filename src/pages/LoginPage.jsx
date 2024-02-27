import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Title,
  Text
} from "@mantine/core";
import { loginRequest } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email invalido"),
      password: (value) => (value.length < 1 ? "Contraseña es requerida" : null)
    }
  });

  return (
    <Box maw={340} mx="auto">
      <Title
        size="h1"
        style={{
          paddingBottom: "20px",
          paddingTop: "20px" 
        }}
      >
        Iniciar sesión
      </Title>
      <form
        onSubmit={form.onSubmit(async (values) => {
          console.log(values);
          try {
            const resp = await loginRequest(values);
            localStorage.setItem("token", resp.data.token);
            navigate("/tasks");
          } catch (error) {
            console.log(error.response.data.msg);
            alert(`${error.response.data.msg}`);
          }
        })}
      >
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Contraseña"
          placeholder="Contraseña"
          {...form.getInputProps("password")}
        />
        <Group style={{ justifyContent: "space-between" }} mt="md">
          <Link to="/register">Registrarse</Link>
          <Button type="submit">Iniciar sesión</Button>
        </Group>
      </form>
    </Box>
  );
}

export default LoginPage;
