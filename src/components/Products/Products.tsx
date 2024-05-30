"use client";

import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import { AppContext } from "@/context/AppContext";
import { Product } from "@/api/fetchProducts";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: Product[] = await response.json();
  return data;
};

const Products: React.FC = () => {
  const { products, setProducts, loading, setLoading, searchValue } =
    useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        console.log("Products fetched and set:", fetchedProducts);
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
            <p className="flex items-center justify-center">
              Nenhum produto encontrado.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
          )}
        </section>
      )}
    </>
  );
};

export default Products;
