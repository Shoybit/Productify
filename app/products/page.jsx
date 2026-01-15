"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../lib/api";
import ProductCard from "./components/ProductCard";
import { Filter, Grid, List, Search, SlidersHorizontal, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const categories = [
    "All Products",
    "Electronics",
    "Home & Kitchen",
    "Fashion",
    "Sports",
    "Books",
    "Beauty",
  ];

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const data = await getProducts({
        search,
        category,
        page,
        limit: 9,
      });

      setProducts(data.products);
      setTotalPages(data.totalPages);
      setLoading(false);
    }

    loadProducts();
  }, [search, category, page]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 px-4">
        <div className="w-10/12 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Discover Amazing Products</h1>
          <p className="text-indigo-100">Find exactly what you're looking for from our curated collection</p>
        </div>
      </div>

      <div className="w-10/12 mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              placeholder="Search products by name, description, or category..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {loading && <Loader2 className="animate-spin text-indigo-600" size={20} />}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-6">
              {/* Categories Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900 flex items-center gap-2">
                    <Filter size={20} className="text-indigo-600" />
                    Categories
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Filter by product type</p>
                </div>
                <div className="p-4 space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setPage(1);
                        setCategory(cat);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        category === cat
                          ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="font-medium">{cat}</span>
                      {category === cat && (
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Products Found</span>
                      <span className="font-semibold text-gray-900">{products.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${(products.length / 100) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Current Page</span>
                      <span className="font-semibold text-gray-900">{page} / {totalPages}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category === "All Products" ? "All Products" : category}
                </h2>
                <p className="text-gray-600 mt-1">
                  {loading ? "Loading..." : `Showing ${products.length} products`}
                </p>
              </div>

            </div>

            {/* Loading State */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative">
                  <Loader2 className="animate-spin text-indigo-600" size={48} />
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-100 animate-ping"></div>
                </div>
                <p className="mt-4 text-gray-600 font-medium">Loading products...</p>
              </div>
            ) : products.length === 0 ? (
              /* Empty State */
              <div className="text-center py-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  {search 
                    ? `No products found for "${search}". Try a different search term.`
                    : `No products found in "${category}". Try selecting a different category.`
                  }
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All Products");
                    setPage(1);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              /* Products Grid */
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        disabled={page === 1 || loading}
                        onClick={() => setPage((p) => p - 1)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                      >
                        <ChevronLeft size={20} />
                        Previous
                      </button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (page <= 3) {
                            pageNum = i + 1;
                          } else if (page >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = page - 2 + i;
                          }

                          return (
                            <button
                              key={pageNum}
                              onClick={() => setPage(pageNum)}
                              className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
                                page === pageNum
                                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                  : "bg-white border border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        disabled={page === totalPages || loading}
                        onClick={() => setPage((p) => p + 1)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                      >
                        Next
                        <ChevronRight size={20} />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Page {page} of {totalPages} • {products.length} products
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}