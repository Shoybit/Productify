/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Star, Eye, ShoppingCart, TrendingUp, Plus } from "lucide-react";

/**
 * props:
 * - products: array of latest products (max 4)
 */
export default function LatestProducts({ products = [] }) {
  return (
    <section className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header with decorative element */}
      <div className="relative">
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pl-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Fresh Arrivals
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Products
            </h3>
          </div>
          
          <Link
            href="/products"
            className="group flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors px-4 py-2 rounded-lg hover:bg-purple-50"
          >
            View All Products
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Product Image Container */}
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {product.image &&
                (product.image.startsWith("http") ||
                  product.image.startsWith("data:image")) ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">📦</span>
                    </div>
                    <span className="text-gray-400 text-sm">No Image Available</span>
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.discountPercentage && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      -{product.discountPercentage}%
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      NEW
                    </span>
                  )}
                </div>
                
              </div>
            </Link>

            {/* Product Info */}
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-700">
                      {product.rating || "4.5"}
                    </span>
                  </div>
                </div>
                
                <Link href={`/products/${product.id}`} className="block">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {product.title}
                  </h3>
                </Link>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="space-y-1">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price?.toFixed(2) || "0.00"}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through block">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                {/* Stock Status */}
                {product.stock !== undefined && (
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.stock > 10 
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 0
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 10 ? "In Stock" : `${product.stock} left`}
                  </div>
                )}
              </div>

              {/* Brand */}
              {product.brand && (
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Brand:</span>
                  <span className="text-sm font-medium text-gray-700">{product.brand}</span>
                </div>
              )}
            </div>
            
            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl pointer-events-none transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-3xl">📦</div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Yet</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Be the first to add a product and showcase it here!
          </p>
          <Link
            href="/add-product"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            <Plus className="h-4 w-4" />
            Add Your First Product
          </Link>
        </div>
      )}
    </section>
  );
}