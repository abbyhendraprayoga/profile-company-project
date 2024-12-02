import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import AppShell from "@/components/AppShell"; // Import AppShell
import "@/styles/globals.css"; // Import global styles
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}> 
      <AppShell> 
        <Component {...pageProps} /> 
      </AppShell>
    </SessionProvider>
  );
}
