import { QueryCache, QueryClient } from "react-query";

const SECOND = 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
    }
  }
});

export const queryCache = new QueryCache({
  onError: error => {
    console.log(error);
  }
}) 