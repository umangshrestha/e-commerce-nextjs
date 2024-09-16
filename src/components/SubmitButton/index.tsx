"use client";
import Button from "@mui/material/Button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text: string;
}

export default function SubmitButton({ text }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {text}
    </Button>
  );
}
