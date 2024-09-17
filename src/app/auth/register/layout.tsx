import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for a new account",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
