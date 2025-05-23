
import { useEffect, useState } from 'react';
import './Products.css';
import { useGetProductsQuery } from './productsApi';

// Define Product type based on your product structure
interface Product {
  id: number | string;
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
}

const Product = () => {
  const [skip, setSkip] = useState(0);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const limit = 10;

  const { data, isLoading, isError } = useGetProductsQuery({ limit, skip });

  useEffect(() => {
    if (data?.products) {
      setAllProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <div className="main">
      <div className='heading'>
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <h5>Problems trying to resolve the conflict between</h5>
      </div>

       <div className="Featured-products">
        
        {/* Dynamic API Products */}
        {allProducts.map((product) => (
          <div className="products" key={`api-${product.id}`}>
            <img src={product.thumbnail} alt={product.title} />
            <h5>{product.title}</h5>
            <span>
              <a href="#">{product.brand}</a>
              <h6>${product.price} <strong>${(product.price * 0.6).toFixed(2)}</strong></h6>
            </span>
          </div>
        ))}
      </div>

      {isLoading && <p>Loading more products...</p>}
      {isError && <p>Failed to load more products.</p>}

      <button onClick={handleLoadMore}>LOAD MORE PRODUCTS</button>
    </div>
  );
};

export default Product;
