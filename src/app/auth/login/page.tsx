import * as React from "react";
import { SignInPage } from "@toolpad/core/SignInPage";
import { providerMap } from "@/app/auth";
import loginAction from "@/app/auth/login/action";

export default function SignIn() {
  return <SignInPage providers={providerMap} signIn={loginAction} />;
}
