"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router } from '@toolpad/core';
import { APP_NAME } from '@/config';
import Image from 'next/image';
import { NAVIGATION } from '@/config/navigation';


const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
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
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  children?: React.ReactNode;
}

export default function LayoutNavigationLinks({
    children,
    window
}: LayoutProps) {

  const [pathname, setPathname] = React.useState('/home');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
        branding={{
            title: APP_NAME,
            logo: <Image src="/favicon.svg" alt="Logo" width={32} height={32} />,

        }}

      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
      <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100',
      }}
    >
        {children}
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}
