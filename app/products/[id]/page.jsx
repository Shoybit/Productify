export default function ProductDetails({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Product ID: {params.id}
      </h1>
      <p>Product details will be shown here</p>
    </div>
  );
}
