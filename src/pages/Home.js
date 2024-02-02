import { useEffect } from "react";

import { ProductCard } from "../components/ProductCard";
import { FilterDropdown } from "../components/FilterDropdown";
import { useDispatch, useSelector } from "react-redux";
import { initialProductList } from "../store/filterSlice";

export const Home = () => {
  //   const [products, setProduct] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.filterState.productList);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      dispatch(initialProductList(data));
    }
    fetchProduct();
  }, []); // eslint-disable-line

  return (
    <main>
      <FilterDropdown />
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
