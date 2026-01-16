/* eslint-disable @next/next/no-img-element */
import { getProductById } from "../../../lib/api.js";
import { notFound } from 'next/navigation';
import { Star, Shield, Truck, RefreshCw, CreditCard, Heart, Share2, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product || product.message || product.error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header - Productify Theme */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/products" className="flex items-center space-x-2">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
                <span className="text-lg font-semibold text-gray-800">Back to Products</span>
              </Link>
            </div>
            

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group">
              {product.image &&
                (product.image.startsWith("http") ||
                  product.image.startsWith("data:image") ||
                  product.image.startsWith("/")) ? (
                <div className="aspect-square flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                </div>
              ) : (
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">No image available</span>
                </div>
              )}
              


            </div>

          

          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Product Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                {product.rating && (
                  <>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">{product.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{product.reviews?.length || 124} reviews</span>
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price?.toFixed(2) || '0.00'}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Product Meta */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500 block">Brand</span>
                  <span className="font-semibold text-gray-900">{product.brand}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">Category</span>
                  <span className="font-semibold text-gray-900 capitalize">{product.category}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">SKU</span>
                  <span className="font-semibold text-gray-900">PROD-{id}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">Availability</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.stock > 10 
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 0
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 10 
                      ? `${product.stock} in stock`
                      : product.stock > 0
                      ? `Only ${product.stock} left`
                      : 'Out of stock'}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <RefreshCw className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">30-Day Returns</h4>
                    <p className="text-sm text-gray-600">Easy return policy</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2-Year Warranty</h4>
                    <p className="text-sm text-gray-600">Manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="sticky bottom-0 bg-white p-4 rounded-xl shadow-lg border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-3">
                </div>
                
                <div className="flex-1 flex gap-3">
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        {product.specifications && (
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>


    </div>
  );
}