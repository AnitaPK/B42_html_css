import React from "react";
import useProducts from "./useProducts";

const ProductList = () => {
  const { products, loading, deleteProduct,refreshProducts } = useProducts(
    "https://fakestoreapi.com/products"
  );

  console.log(products);

  if (loading) return <p>Loading</p>;
  return (
    <div>
      HELLO Guys...
      {products.length == 0 ? (
        <button onClick={refreshProducts}>Refresh</button>
      ) : (
        <>
          {products.map((p, index) => (
            <>
              <h3>{p.title}</h3>
              <img src={p.image} width="100" height="100"></img>
              <button onClick={() => deleteProduct(p.id)}>Delete</button>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
