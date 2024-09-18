import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "List of cart",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
