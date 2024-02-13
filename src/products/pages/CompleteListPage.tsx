import { ProductList } from "..";
import { useProducts } from "../hooks/useProducts";

export const CompleteListPage = () => {
  const { isLoading, products } = useProducts({});
  return (
    <div className="flex-col">
      {isLoading && <p>Cargando...</p>}

      <ProductList products={products} />
    </div>
  );
};
