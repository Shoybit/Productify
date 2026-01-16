// components/HowItWorks.jsx
"use client";

import { useState } from "react";
import { 
  UserPlus, 
  Upload, 
  Settings, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Database,
  Users as UsersIcon,
  BarChart
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Sign Up",
      desc: "Create your Productify account. No credit card required for the free trial.",
      icon: <UserPlus className="w-8 h-8" />,
      features: [
        "14-day free trial",
        "No credit card needed",
        "Instant dashboard access",
        "Guided onboarding"
      ],
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      action: "Start Free Trial"
    },
    {
      step: "02",
      title: "Import Products",
      desc: "Add your products via CSV, Excel, or connect with existing platforms.",
      icon: <Upload className="w-8 h-8" />,
      features: [
        "CSV/Excel import",
        "Drag & drop images",
        "Bulk edit tools",
        "API integration"
      ],
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      action: "Import Products"
    },
    {
      step: "03",
      title: "Organize & Manage",
      desc: "Categorize products, set pricing, manage inventory across multiple channels.",
      icon: <Settings className="w-8 h-8" />,
      features: [
        "Smart categorization",
        "Inventory management",
        "Multi-channel sync",
        "Team collaboration"
      ],
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      action: "Manage Products"
    },
    {
      step: "04",
      title: "Scale & Analyze",
      desc: "Track performance with analytics and scale your product catalog efficiently.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Sales analytics",
        "Performance insights",
        "Growth tracking",
        "Export reports"
      ],
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      action: "View Analytics"
    },
  ];

  const activeStepData = steps[activeStep];

  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative w-10/12 mx-auto px-4 sm:px-6 lg:px-8">






<div>
  <div className="flex items-center gap-3 mb-4">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
      <div className="relative p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <CheckCircle className="h-5 w-5 text-gradient from-blue-600 to-purple-600" />
      </div>
    </div>
    <div className="space-y-1">
      <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
        Get Started with Productify
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </div>
  </div>
  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
     How Productify Works
    <span className="block text-lg font-normal text-gray-600 mt-3">
      From zero to product management hero in 4 simple steps
    </span>
  </h3>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
          {/* Left Column - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`group cursor-pointer relative p-6 rounded-2xl border-2 transition-all duration-300 
                          ${activeStep === index
                            ? "border-blue-500 bg-white shadow-xl"
                            : "border-gray-200 hover:border-blue-200 hover:bg-white/80 hover:shadow-lg"
                          }`}
              >
                {/* Step Indicator */}
                <div className="flex items-start gap-6">
                  <div className={`relative flex-shrink-0 transition-transform ${activeStep === index ? "scale-110" : ""}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-20 rounded-xl blur-md`} />
                    <div className={`relative w-16 h-16 flex items-center justify-center rounded-xl 
                                  bg-gradient-to-br ${step.gradient} text-white font-bold text-2xl shadow-lg`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.desc}
                        </p>
                      </div>
                      {activeStep === index && (
                        <div className="p-1 bg-green-100 rounded-full">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className={`mt-4 text-sm font-medium px-4 py-2 rounded-lg transition-all
                                    ${activeStep === index
                                      ? "bg-blue-600 text-white hover:bg-blue-700"
                                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}>
                      {step.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress */}
            <div className="pt-8">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>Step {activeStep + 1} of {steps.length}</span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 
                           transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Preview Header */}
              <div className="relative h-12 bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                  <div className="w-2 h-2 bg-white/30 rounded-full" />
                  <div className="ml-auto text-white text-sm font-medium">
                    Productify Dashboard
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl 
                                bg-gradient-to-br ${activeStepData.gradient} text-white`}>
                    {activeStepData.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Step {activeStepData.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activeStepData.title}
                    </h3>
                  </div>
                </div>

                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">
                      {activeStep === 0 ? "0" : activeStep === 1 ? "500+" : activeStep === 2 ? "1K+" : "5K+"}
                    </div>
                    <div className="text-sm text-blue-600">Products Managed</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">
                      {activeStep === 0 ? "1" : activeStep === 1 ? "3" : activeStep === 2 ? "5+" : "10+"}
                    </div>
                    <div className="text-sm text-purple-600">Team Members</div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">You'll be able to:</h4>
                  {activeStepData.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium 
                             hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed 
                             transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    {activeStep + 1}/{steps.length}
                  </div>
                  
                  <button
                    onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white font-medium hover:shadow-lg disabled:opacity-50 
                             disabled:cursor-not-allowed transition-all"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>

            {/* Get Started CTA */}
            <div className="mt-6 text-center">
              <button className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 
                               text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl 
                               transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-3">
                  <UserPlus className="w-5 h-5" />
                  Start Your Productify Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <p className="text-gray-500 text-xs mt-3">
                Free 14-day trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}