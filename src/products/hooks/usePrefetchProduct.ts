import { useQueryClient } from "@tanstack/react-query";
import { getProductById } from "../services";

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();
  const prefetchProduct = async (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
    });
  };

  return prefetchProduct;
};
