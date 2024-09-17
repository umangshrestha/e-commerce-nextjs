"use client";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as React from "react";
import { useFormState } from "react-dom";
import { registerAction } from "@/app/actions/register";
import ListError from "@/components/ListError";
import SubmitButton from "@/components/SubmitButton";

export default function Login() {
  const [state, action] = useFormState(registerAction, undefined);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        {/* <LockOutlinedIcon /> */}
      </Avatar>
      <Typography component="h1" variant="h5">
        Create A New Account
      </Typography>
      <Box component="form" action={action} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          error={(state?.errors?.email?.length || 0) > 0}
          helperText={<ListError errors={state?.errors?.email} />}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          error={(state?.errors?.password?.length || 0) > 0}
          helperText={<ListError errors={state?.errors?.password} />}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="confirmPassword"
          type="password"
          id="confirmPassword"
          autoComplete="confirm-password"
          error={(state?.errors?.confirmPassword?.length || 0) > 0}
          helperText={<ListError errors={state?.errors?.confirmPassword} />}
        />
        <SubmitButton text="sign up" />
      </Box>
    </Box>
  );
}
