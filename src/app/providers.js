'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            retry: false,          // ❗ auth endpoints should not retry
            refetchOnWindowFocus: false,
          },
    }
})
export default function Providers({ children }) {
 

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}