const BASE_URL = "https://productify-bakend.vercel.app/api";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`, {
    cache: "no-store",
  });

  return res.json(); // backend যেটা পাঠায় সেটাই
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  return res.json(); // single product OR { message }
}

export async function addProduct(product) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
}
