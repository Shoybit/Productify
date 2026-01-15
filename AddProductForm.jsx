/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "./lib/api";
import { Plus, Upload, Image as ImageIcon, Tag, DollarSign, Star, AlertCircle, Loader2 } from "lucide-react";

export default function AddProductForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "Electronics",
    brand: "Generic",
    rating: "4.0",
    image: "",
    description: "",
    stock: "10",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    "Electronics",
    "Home & Kitchen",
    "Fashion",
    "Sports & Outdoors",
    "Books",
    "Beauty & Personal Care",
    "Toys & Games",
    "Health & Household",
  ];

  const brands = [
    "Generic",
    "TechCore",
    "StyleHub",
    "HomeEssentials",
    "FitPro",
    "BookWorm",
    "BeautyGlow",
    "ToyLand",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.title.trim()) {
      newErrors.title = "Product title is required";
    }
    
    if (!form.price || Number(form.price) <= 0) {
      newErrors.price = "Valid price is required";
    }
    
    if (!form.image.trim()) {
      newErrors.image = "Image URL is required";
    } else if (!form.image.startsWith('http')) {
      newErrors.image = "Please enter a valid URL";
    }
    
    if (!form.description.trim()) {
      newErrors.description = "Description is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      await addProduct({
        title: form.title.trim(),
        price: Number(form.price),
        category: form.category,
        brand: form.brand,
        rating: Number(form.rating),
        image: form.image.trim(),
        description: form.description.trim(),
        stock: Number(form.stock),
      });

      router.push("/products");
    } catch (error) {
      console.error("Error adding product:", error);
      setErrors({ submit: "Failed to add product. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-indigo-50/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
            <Plus size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Add New Product
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to add a new product to your catalog. All fields marked with * are required.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Form Section */}
            <div className="lg:col-span-2 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Product Title *
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      name="title"
                      placeholder="Enter product title (e.g., Wireless Bluetooth Headphones)"
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all ${
                        errors.title ? 'border-red-500' : 'border-gray-300'
                      }`}
                      value={form.title}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.title && (
                    <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {errors.title}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Product Description *
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe the product features, specifications, and benefits..."
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={form.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {errors.description}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Price ($) *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="number"
                        name="price"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all ${
                          errors.price ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={form.price}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.price && (
                      <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                        <AlertCircle size={16} />
                        {errors.price}
                      </div>
                    )}
                  </div>

                  {/* Stock */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      name="stock"
                      placeholder="Enter stock quantity"
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      value={form.stock}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                      value={form.category}
                      onChange={handleChange}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Brand
                    </label>
                    <select
                      name="brand"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                      value={form.brand}
                      onChange={handleChange}
                    >
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Rating
                    </label>
                    <div className="relative">
                      <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        name="rating"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                        value={form.rating}
                        onChange={handleChange}
                      >
                        {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map((rating) => (
                          <option key={rating} value={rating}>{rating} Stars</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Image URL *
                    </label>
                    <div className="relative">
                      <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        name="image"
                        placeholder="https://example.com/product-image.jpg"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all ${
                          errors.image ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={form.image}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.image && (
                      <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                        <AlertCircle size={16} />
                        {errors.image}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertCircle size={20} className="text-red-600" />
                    <span className="text-red-600">{errors.submit}</span>
                  </div>
                )}

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Adding Product...
                      </>
                    ) : (
                      <>
                        <Plus size={20} />
                        Add Product
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => router.push("/products")}
                    className="px-6 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Section */}
            <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-gray-100 p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Preview</h3>
              
              {/* Preview Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {form.image ? (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                      }}
                    />
                  ) : (
                    <div className="text-center p-4">
                      <ImageIcon size={48} className="text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">Image preview will appear here</p>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 truncate">
                    {form.title || "Product Title"}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {form.description || "Product description will appear here"}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">
                      ${form.price || "0.00"}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-600">{form.rating || "0"}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {form.category}
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {form.brand}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <h4 className="font-semibold text-indigo-900 mb-2">Quick Tips</h4>
                <ul className="space-y-2 text-sm text-indigo-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                    Use high-quality product images
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                    Write clear and descriptive titles
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div>
                    Include all product specifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}