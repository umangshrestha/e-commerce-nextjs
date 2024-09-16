import type { Metadata } from "next";
import AuthLayout from "@/components/AuthLayout";
export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayout showSignUp={true} showForgotPassword={true} showSignIn={false}>
      {children}
    </AuthLayout>
  );
}
