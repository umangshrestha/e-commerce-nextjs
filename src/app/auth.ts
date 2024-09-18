import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import type { AuthProvider, SupportedAuthProvider } from "@toolpad/core";

const providers: Provider[] = [
  // Credentials({
  //   credentials: {
  //     email: { label: "Email", type: "email" },
  //     password: { label: "Password", type: "password" },
  //   },
  //   authorize(c) {
  //     if (c.password !== "password") return null;
  //     return {
  //       id: "test",
  //       name: "Test User",
  //       email: "test@example.com",
  //     };
  //   },
  // }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  }
  return { id: provider.id as SupportedAuthProvider, name: provider.name };
}) as AuthProvider[];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    authorized({ auth: session, request: { nextUrl } }) {
      const isLoggedIn = !!session?.user;
      const isPublicPage = nextUrl.pathname.startsWith("/public");

      if (isPublicPage || isLoggedIn) {
        return true;
      }

      return false;
    },
  },
});
