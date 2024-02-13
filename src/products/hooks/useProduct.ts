import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/actions";

type Options = {
  id: number;
};

export const useProduct = ({ id }: Options) => {
  const { data, ...query } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return { ...query, product: data };
};
