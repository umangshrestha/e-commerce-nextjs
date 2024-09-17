import Link from "next/link";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

interface AuthLayoutProps {
  children: React.ReactNode;
  showSignUp: boolean;
  showForgotPassword: boolean;
  showSignIn: boolean;
}

export default function AuthLayout({
  children,
  showSignUp = true,
  showForgotPassword = true,
  showSignIn = true,
}: AuthLayoutProps) {
  const arr = [];
  if (showSignUp) {
    arr.push(
      <Typography align="center" color="textSecondary" component="p">
        {"Don't have an account?"}
        <Button size="small" component={Link} href="/auth/register">
          Sign Up
        </Button>
      </Typography>,
    );
  }
  if (showSignIn) {
    arr.push(
      <Typography align="center" color="textSecondary" component="p">
        Already have an account?
        <Button size="small" component={Link} href="/auth/login">
          Sign In
        </Button>
      </Typography>,
    );
  }

  if (showForgotPassword) {
    arr.push(
      <Typography align="center" color="textSecondary" component="p">
        Forgot your password?
        <Button size="small" component={Link} href="/auth/reset">
          Reset Password
        </Button>
      </Typography>,
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      {children}
      {arr}
    </Container>
  );
}
