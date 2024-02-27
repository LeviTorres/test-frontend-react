import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
  Title
} from "@mantine/core";
import { createUserRequest } from "../api/users";
import { useNavigate, Link } from "react-router-dom";
function RegisterPage() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email invalido"),
      name: (value) => (value.length < 1 ? "Nombre es requerido" : null),
      password: (value) =>
        value.length < 1 ? "Contraseña es requerida" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Contraseñas no coinciden" : null
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
        Registrate
      </Title>
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            console.log(values);
            const resp = await createUserRequest(values);
            console.log({ resp });
            navigate("/");
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
        <TextInput
          withAsterisk
          label="Nombre"
          placeholder="Juan Perez"
          {...form.getInputProps("name")}
        />
        <PasswordInput
          withAsterisk
          label="Contraseña"
          placeholder="Contraseña"
          {...form.getInputProps("password")}
        />

        <PasswordInput
          withAsterisk
          mt="sm"
          label="Confirmar contraseña"
          placeholder="Confirmar contraseña"
          {...form.getInputProps("confirmPassword")}
        />
        <Group
          style={{ justifyContent: "space-between" }}
          justify="flex-end"
          mt="md"
        >
          <Link to="/">Iniciar sesión</Link>
          <Button type="submit">Registrarse</Button>
        </Group>
      </form>
    </Box>
  );
}

export default RegisterPage;
