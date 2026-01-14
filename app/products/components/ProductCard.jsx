
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-semibold">{product.name}</h2>
      <p>Price: ${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="text-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}
