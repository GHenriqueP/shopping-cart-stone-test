"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import fetchProducts, { Product } from "../../api/fetchProducts";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="max-container padding-container relative pr-5 pt-28 pb-12 grid grid-cols-auto-fill-minmax gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default Products;
