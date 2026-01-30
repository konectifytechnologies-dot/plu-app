// hooks/useAuth.ts
'use client';

import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  fetchUser,
  loginRequest,
  logoutRequest,
  getCsrf
} from '@/lib/auth';

const USER_QUERY_KEY = ['auth', 'user'];

export function useAuth() {
  const queryClient = useQueryClient();

  // 🔹 Current user query
  const {data: user,isLoading,error} = useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: fetchUser,
    staleTime: Infinity,      // session-based auth doesn't go stale
    gcTime: Infinity,
  });

  // 🔹 Login mutation
  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: USER_QUERY_KEY,
      });
    },
  });

  // 🔹 Logout mutation
  const logoutMutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      queryClient.setQueryData(USER_QUERY_KEY, null);
    },
  });

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,

    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,

    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending, 
  };
}
