import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services";

export const useProductMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["products", { filterKey: data.category }],
      });
    },
  });

  return mutation;
};
