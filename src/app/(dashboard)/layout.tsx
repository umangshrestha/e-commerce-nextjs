"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Router } from "@toolpad/core";
import { APP_NAME } from "@/config";
import Image from "next/image";
import { NAVIGATION } from "@/config/navigation";
import { PageContainer } from "@toolpad/core/PageContainer";
import { createTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

interface LayoutProps {
  children?: React.ReactNode;
}

export default function NavigationLayout({ children }: LayoutProps) {
  const { data: session } = useSession();
  console.log(session);
  const [pathname, setPathname] = React.useState("/products");
  const router = useRouter();
  const dummyRouter = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        path = path.toString();
        setPathname(path);
        router.push(path);
      },
    };
  }, [pathname, router]);

  const demoWindow = global.window;

  return (
    <AppProvider
      branding={{
        title: APP_NAME,
        logo: <Image src="/favicon.svg" alt="Logo" width={32} height={32} />,
      }}
      navigation={NAVIGATION}
      session={session}
      router={dummyRouter}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100",
          }}
        >
          <PageContainer sx={{ minHeight: "90vh" }}>{children}</PageContainer>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}
