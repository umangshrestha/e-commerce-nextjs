import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { APP_NAME, APP_DESCRIPTION } from "@/config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <SessionProvider>{children}</SessionProvider>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
