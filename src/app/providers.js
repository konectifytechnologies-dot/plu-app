'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { SessionProvider } from "next-auth/react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,          // ❗ auth endpoints should not retry
      refetchOnWindowFocus: false,
    },
  }
})
export default function Providers({ children, session }) {


  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}