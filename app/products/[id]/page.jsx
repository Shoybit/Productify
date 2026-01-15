/* eslint-disable @next/next/no-img-element */
// app/products/[id]/page.jsx
import { getProductById } from "../../../lib/api.js";

export default async function ProductDetails({ params }) {
  const product = await getProductById(params.id);

  return (
    <div className="max-w-xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover mb-4"
      />

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="my-2">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
    </div>
  );
}
