import * as React from "react";
import Typography from "@mui/material/Typography";
import { auth } from "@/app/auth";
import { APP_NAME } from "@/config";

export default async function HomePage() {
  const session = await auth();

  return (
    <Typography>
      Welcome to <b>{APP_NAME}</b>, {session?.user?.name || "User"}!
    </Typography>
  );
}
