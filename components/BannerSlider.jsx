/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Eye, Shield, CheckCircle } from "lucide-react";

const slides = [
  {
    title: "Wireless Bluetooth Headphones",
    desc: "Experience powerful sound and total freedom with these Wireless Bluetooth Headphones. Designed for comfort and performance, they deliver clear audio, deep bass, and stable connectivity for music, calls, gaming, and workouts. The lightweight, ergonomic design ensures all-day comfort, while long-lasting battery life keeps you connected without interruptions. With easy pairing and built-in controls, you can enjoy seamless listening anytime, anywhere.",
    cta: "View Products",
    link: "/products",
    bg: "from-blue-600 to-indigo-700",
    image: "https://i.ibb.co.com/PsW0MPwq/hoco-esd15-wireless-bluetooth-headphones-white.jpg", 
    icon: Eye,
    features: ["Bluetooth connectivity for fast, stable pairing", "Built-in microphone for hands-free calls", "Long battery life for extended use"]
  },
  {
    title: "Dumbbell Set",
    desc: "Build strength and improve fitness with this versatile Dumbbell Set, perfect for home workouts and gym training. Designed for durability and comfort, it helps you target multiple muscle groups including arms, shoulders, chest, back, and legs. The adjustable weight design allows you to customize your workout intensity, making it suitable for beginners and advanced users alike. Compact and easy to store, this dumbbell set is ideal for strength training, toning, and endurance workouts.",
    cta: "Add Product Now",
    link: "/add-product",
    bg: "from-purple-600 to-pink-600",
    image: "https://i.ibb.co.com/mVZvkQrZ/3761811-Adjustable20-Set20kg.avif",
    icon: Plus,
    features: ["Adjustable weights for customized training", "Strong, durable construction", "Ideal for home gym and fitness training"]
  },
  {
    title: "Secure & Reliable Platform",
    desc: "Stay organized, focused, and productive with this Daily Planner Journal, designed to help you plan your day with clarity and purpose. Whether for work, study, or personal goals, it provides structured sections for daily tasks, priorities, notes, and reflections. The simple, elegant layout encourages consistency, time management, and goal tracking, making it perfect for students, professionals, and anyone aiming to build better daily habits.",
    cta: "Get Started Free",
    link: "/signup",
    bg: "from-emerald-600 to-teal-600",
    image: "https://i.ibb.co.com/NdVpS2VG/ik-L-AC-UF1000-1000-QL80.jpg",
    icon: Shield,
    features: ["Daily planning layout for tasks and priorities", "Helps improve productivity and time management", "Clean, easy-to-use design"]
  },
  {
    title: "Powerful Analytics Dashboard",
    desc: "Nourish and hydrate your skin with this Moisturizing Face Cream, specially formulated to provide long-lasting moisture and a soft, healthy glow. Its lightweight, non-greasy texture absorbs quickly, helping to soothe dryness and improve skin texture. Suitable for daily use, this face cream keeps your skin feeling smooth, refreshed, and well-hydrated throughout the day.",
    cta: "View Analytics",
    link: "/analytics",
    bg: "from-orange-500 to-red-500",
    image: "https://i.ibb.co.com/v4Swz5Xd/Free-Shipping-Day-1to1.png",
    icon: CheckCircle,
    features: ["Deep hydration for soft, smooth skin", "Suitable for all skin types", "Ideal for daily skincare routine"]
  }
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];
  const Icon = slide.icon;

  return (
<section className="relative min-h-[85vh] md:h-[85vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} opacity-90`} />
        <img
         src={slide.image}
          alt="Banner"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">Productify Feature</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-white/90 max-w-2xl">
                {slide.desc}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {slide.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-white rounded-full" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>



              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm text-white/70">Products Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-white/70">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
<div className="relative mt-12 lg:mt-0">
              {/* Floating Product Card */}
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-xl" />
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {/* Product Image Placeholder */}
                        <div className="aspect-video sm:aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden">
                        <img
                        src={slide.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        />

                        </div>

                    
                    {/* Product Info */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white">Sample Product</h3>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                          In Stock
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-yellow-400 flex">
                          {"★".repeat(5)}
                        </div>
                        <span className="text-white/80">(4.5/5)</span>
                      </div>
                      <div className="text-2xl font-bold text-white">$299.99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 ${
                i === index
                  ? "w-10 h-3 bg-white rounded-full"
                  : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 z-20 animate-bounce">
        <div className="text-white/60 text-sm flex items-center gap-2">
          Scroll for more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}