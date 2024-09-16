import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LazyUserMenu from "../UserMenu";
import LazyNavMenu from "../NavMenu";
import { Suspense } from "react";
import { APP_NAME } from "@/config";

export default function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inheritf",
              textDecoration: "none",
            }}
          >
            {APP_NAME}
          </Typography>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyUserMenu />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <LazyNavMenu />
          </Suspense>

          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
