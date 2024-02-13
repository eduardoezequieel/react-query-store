import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/actions";

type Options = {
  filterKey?: string;
};

export const useProducts = ({ filterKey }: Options) => {
  const { data, ...query } = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60,
  });

  return { ...query, products: data || [] };
};
