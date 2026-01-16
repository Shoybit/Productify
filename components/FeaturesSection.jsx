// components/FeaturesSection.jsx
import { 
  Zap, 
  Package, 
  ShieldCheck, 
  BarChart3,
  Cloud,
  Users,
  Globe,
  Cpu
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Setup",
      desc: "Get Productify running in under 5 minutes with our guided onboarding.",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "5-minute setup",
      delay: "Instant"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Product Import",
      desc: "Bulk upload products via CSV, Excel, or connect directly with your suppliers.",
      gradient: "from-purple-500 to-pink-500",
      highlight: "500+ products/minute",
      delay: "Bulk Upload"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enterprise Security",
      desc: "Bank-level encryption, 2FA, and SOC2 compliant data protection.",
      gradient: "from-green-500 to-emerald-500",
      highlight: "99.99% Uptime",
      delay: "256-bit SSL"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      desc: "Predictive insights and sales forecasting to optimize your product strategy.",
      gradient: "from-orange-500 to-red-500",
      highlight: "50+ Metrics",
      delay: "Real-time"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Synchronization",
      desc: "Automatic sync across all devices. Never lose your product data.",
      gradient: "from-indigo-500 to-blue-500",
      highlight: "Always Online",
      delay: "Auto Backup"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      desc: "Invite team members with custom roles and permissions for each product.",
      gradient: "from-pink-500 to-rose-500",
      highlight: "Unlimited Users",
      delay: "Role Control"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automated Workflows",
      desc: "Set up rules for pricing, inventory alerts, and automatic categorization.",
      gradient: "from-gray-700 to-gray-900",
      highlight: "Custom Rules",
      delay: "Smart Automation"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Marketplace",
      desc: "Multi-currency, multi-language support for international expansion.",
      gradient: "from-teal-500 to-green-500",
      highlight: "120+ Countries",
      delay: "Multi-lingual"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Productify Branding */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>WHY PRODUCTIFY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Product Management
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage, organize, and grow your product catalog efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-200/80 p-6 
                         hover:border-blue-500/30 transition-all duration-300 
                         hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              {/* Productify Branding */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white px-2 py-1 rounded-full">
                  Productify
                </div>
              </div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 blur-xl rounded-2xl`} />
                <div className={`relative w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {item.delay}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Highlight */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-sm font-semibold text-blue-700">
                    {item.highlight}
                  </div>
                </div>
              </div>

              {/* Hover Line Indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 
                            group-hover:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                            rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA - Productify Theme */}
        <div className="text-center mt-16">
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 
                         text-white px-8 py-4 rounded-xl font-semibold 
                         hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 
                         hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Explore All Productify Features
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Trusted by 10,000+ product teams worldwide
          </p>
        </div>
      </div>
    </section>
  );
}