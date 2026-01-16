/* eslint-disable @next/next/no-img-element */
// app/products/components/ProductCard.jsx
import Link from "next/link";
import { Star,  Eye, } from "lucide-react";

export default function ProductCard({ product }) {

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >


      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop"}
          alt={product.name || product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
          }}
        />
        

      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          {product.category && (
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
          )}
          {product.brand && (
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {product.name || product.title}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Rating - Only show if product has rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) 
                    ? "fill-yellow-400 text-yellow-400" 
                    : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">{product.rating.toFixed(1)}</span>
          </div>
        )}

        {/* Price - Always show the actual price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
            </span>
          </div>
          
          {/* Stock Status - Only show if product has stock info */}
          {product.stock !== undefined && (
            <div className="flex items-center gap-1">
              {product.stock === 0 ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs text-red-600 font-medium">Out of Stock</span>
                </>
              ) : product.stock < 20 ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-xs text-orange-600 font-medium">Low Stock</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-green-600 font-medium">In Stock</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all text-sm shadow-md hover:shadow-lg"
          >
            <Eye size={16} />
            View Details
          </Link>
          
        </div>


      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 pointer-events-none transition-all duration-300"></div>
    </div>
  );
}