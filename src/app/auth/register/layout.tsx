import type { Metadata } from "next";
import AuthLayout from "@/components/AuthLayout";
export const metadata: Metadata = {
  title: "Register",
  description: "Register for a new account",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayout showSignUp={false} showForgotPassword={true} showSignIn={true}>
      {children}
    </AuthLayout>
  );
}
