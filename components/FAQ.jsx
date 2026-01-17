"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is Productify really free?",
      a: "Yes! Productify offers a free plan that covers all essential features for small teams. You can upgrade anytime if you need advanced tools.",
      category: "Pricing"
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We use modern security practices to protect your data and ensure it remains private and safe at all times.",
      category: "Security"
    },
    {
      q: "Can I upgrade later?",
      a: "Yes. You can upgrade, downgrade, or cancel your plan at any time without losing your data.",
      category: "Billing"
    },
    {
      q: "Do you offer team collaboration?",
      a: "Yes! Our team plans include collaboration features for working together on product management.",
      category: "Features"
    },
    {
      q: "What support do you provide?",
      a: "We offer 24/7 email support and comprehensive documentation to help you succeed.",
      category: "Support"
    },
    {
      q: "Can I import my existing data?",
      a: "Yes, you can import products via CSV/Excel or use our API for custom integrations.",
      category: "Integration"
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 ">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">




        <div>
  <div className="flex items-center gap-3 mb-4">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
      <div className="relative p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <HelpCircle className="h-5 w-5 text-gradient from-blue-600 to-purple-600" />
      </div>
    </div>
    <div className="space-y-1">
      <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
        FAQ
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </div>
  </div>
  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
    Frequently Asked Questions
    <span className="block text-lg font-normal text-gray-600 mt-3">
    Everything you need to know before getting started
    </span>
  </h3>
</div>


        {/* FAQ Accordion */}
        <div className="space-y-4 mt-10">
          {filteredFaqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`bg-white rounded-xl border border-gray-200 overflow-hidden
                         transition-all ${isOpen ? 'shadow-lg' : 'hover:shadow'}`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {item.category}
                    </div>
                    <span className="font-medium text-gray-900">
                      {item.q}
                    </span>
                  </div>
                  
                  <div className="ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 hover:text-blue-500" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="pl-4 border-l-2 border-blue-500">
                      <p className="text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}