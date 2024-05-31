"use client";

import React, { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import ProductCard from "../ProductCard";
import { AppContext } from "@/context/AppContext";
import { Product, getProducts } from "@/services/ProductService";

const Products: React.FC = () => {
  const { products, setProducts, loading, setLoading, searchValue } =
    useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (products.length === 0) {
      loadProducts();
    }
  }, [setProducts, setLoading, products]);

  useEffect(() => {
    const filterProducts = () => {
      if (!searchValue) {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };

    filterProducts();
  }, [products, searchValue]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="max-container padding-container relative pr-5 pt-28 pb-12 grid grid-cols-auto-fill-minmax gap-5">
          {filteredProducts.length === 0 ? (
            <p className="font-semibold text-xl whitespace-nowrap">
              Nenhum produto encontrado.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )}
        </section>
      )}
    </>
  );
};

export default Products;
