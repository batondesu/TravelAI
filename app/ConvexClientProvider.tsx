"use client";
import {ReactNode} from "react";
import {ConvexReactClient} from "convex/react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth
} from '@clerk/nextjs'
import {ConvexProviderWithClerk} from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export default function ConvexClientProvider({children}: {children: ReactNode}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "hsl(222.2, 47.4%, 11.2%)",
          // change this value (you can get it from you're css variables, make sure to include 'hsl' and commas)
        },
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}