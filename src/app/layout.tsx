import type { Metadata } from "next";
import "./globals.css";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import Footer from "@/components/Footer";
import { APP_NAME, APP_DESCRIPTION } from "@/config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
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
          <ResponsiveAppBar />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
