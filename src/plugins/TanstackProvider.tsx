import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

export const TanstackProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};
