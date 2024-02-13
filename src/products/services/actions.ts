import { Product } from "..";
import { productsApi } from "../api";

type getProductOptions = {
  filterKey?: string;
};

export const getProducts = async ({
  filterKey,
}: getProductOptions): Promise<Product[]> => {
  const params = new URLSearchParams();

  if (filterKey) {
    params.append("category", filterKey);
  }
  const { data } = await productsApi.get<Product[]>("/products", {
    params,
  });
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await productsApi.get<Product>(`/products/${id}`);
  return data;
};

interface ProductLike {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const createProduct = async (product: ProductLike) => {
  const { data } = await productsApi.post<Product>("/products", product);
  return data;
};
