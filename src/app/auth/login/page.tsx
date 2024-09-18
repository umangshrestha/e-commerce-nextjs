import * as React from "react";
import { SignInPage } from "@toolpad/core/SignInPage";
import { auth, providerMap } from "@/app/auth";
import loginAction from "@/app/auth/login/action";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return <SignInPage providers={providerMap} signIn={loginAction} />;
}
