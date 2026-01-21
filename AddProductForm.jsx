"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "./lib/api";
import {
  Plus,
  Image as ImageIcon,
  Tag,
  DollarSign,
  Star,
  AlertCircle,
  Loader2,
  Package,
} from "lucide-react";

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const categories = [
    "Electronics",
    "Home & Kitchen",
    "Fashion",
    "Sports",
    "Books",
    "Beauty",
  ];

  const brands = ["Generic", "TechCore", "StyleHub", "HomeEssentials"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const err = {};
    if (!form.title.trim()) err.title = "Product title is required";
    if (!form.price || Number(form.price) <= 0)
      err.price = "Valid price is required";
    if (!form.image.trim()) err.image = "Image URL is required";
    if (!form.description.trim()) err.description = "Description is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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
    } catch {
      setErrors({ submit: "Failed to add product. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="w-10/12 mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 pt-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 mt-4">
            <Plus size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 bg-lime-800 mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600 mb-2">Fill in the product details below</p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* TITLE */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Product Title *
              </label>
              <div className="relative">
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className={`h-12 w-full p-3 rounded-lg border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                />
              </div>
              {errors.title && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.title}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Description *
              </label>
              <textarea
                rows={3}
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the product features and specifications..."
                className={`w-full p-3 rounded-lg border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none`}
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.description}
                </p>
              )}
            </div>

            {/* PRICE & STOCK */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Price ($) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className={`h-12 w-full p-3 rounded-lg border ${
                      errors.price ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                  />
                </div>
                {errors.price && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.price}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Stock Quantity
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    placeholder="10"
                    min="0"
                    className="h-12 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* CATEGORY & BRAND */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="h-12 w-full px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Brand
                </label>
                <select
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  className="h-12 w-full px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* RATING & IMAGE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Rating
                </label>
                <div className="relative">
                  <select
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    className="h-12 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  >
                    {[5, 4.5, 4, 3.5, 3].map((r) => (
                      <option key={r} value={r}>
                        {r} Stars
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Image URL *
                </label>
                <div className="relative">
                  <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className={`h-12 w-full p-3 rounded-lg border ${
                      errors.image ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                  />
                </div>
                {errors.image && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.image}
                  </p>
                )}
              </div>
            </div>

            {/* SUBMIT ERROR */}
            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <AlertCircle size={20} className="text-red-600" />
                <span className="text-red-600">{errors.submit}</span>
              </div>
            )}

            {/* BUTTONS */}
            <div className="pt-6 mt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2
                            font-semibold py-4 rounded-lg
                           bg-gradient-to-r from-indigo-600
                           to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 
                           transition-all text-sm shadow-md hover:shadow-lg"
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
                className="flex-1 py-4 rounded-lg border-2 border-gray-300 
                         font-semibold text-gray-700 hover:bg-gray-50 
                         hover:border-gray-400 transition-all duration-300"
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          All fields marked with * are required
        </p>
      </div>
    </div>
  );
}
