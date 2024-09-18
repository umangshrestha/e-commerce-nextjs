// ...
import * as React from "react";
import type { AuthProvider } from "@toolpad/core";
import { SignInPage } from "@toolpad/core/SignInPage";
import { AuthError } from "next-auth";
import { providerMap, signIn } from "@/app/auth";

export default function SignIn() {
  return (
    <SignInPage
      providers={providerMap}
      signIn={async (
        provider: AuthProvider,
        formData: FormData,
        callbackUrl?: string,
      ) => {
        "use server";
        try {
          console.log(callbackUrl);
          return await signIn(provider.id, {
            ...(formData && {
              email: formData.get("email"),
              password: formData.get("password"),
            }),
            redirectTo: callbackUrl ?? "/",
          });
        } catch (error) {
          if (error instanceof Error && error.message === "NEXT_REDIRECT") {
            throw error;
          }
          if (error instanceof AuthError) {
            return {
              error:
                error.type === "CredentialsSignin"
                  ? "Invalid credentials."
                  : "An error with Auth.js occurred.",
              type: error.type,
            };
          }
          return {
            error: "Something went wrong.",
            type: "UnknownError",
          };
        }
      }}
    />
  );
}
