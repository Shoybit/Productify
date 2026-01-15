// lib/api.js
const BASE_URL = "http://localhost:5000/api";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return {
    products: data.products || [],
    totalPages: data.totalPages || 1,
    page: data.page || 1,
    total: data.total || 0,
  };
}


export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function addProduct(product) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(product),
  });

  return res.json();
}
