import { Zap, ShieldCheck, Package, BarChart3, ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning Fast Setup",
      desc: "Get started in minutes with our intuitive interface and guided onboarding.",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "5-minute setup"
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Enterprise Security",
      desc: "Bank-level encryption, 2FA, and GDPR compliance for your product data.",
      gradient: "from-green-500 to-emerald-500",
      highlight: "256-bit SSL"
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Smart Management",
      desc: "Bulk operations, smart categorization, and real-time inventory sync.",
      gradient: "from-purple-500 to-pink-500",
      highlight: "500+ products/min"
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "AI Analytics",
      desc: "Predictive insights and sales forecasting to optimize your strategy.",
      gradient: "from-orange-500 to-red-500",
      highlight: "50+ metrics"
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="relative w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
    <div>
  <div className="flex items-center gap-3 mb-4">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
      <div className="relative p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <Zap className="h-5 w-5 text-gradient from-blue-600 to-purple-600" />
      </div>
    </div>
    <div className="space-y-1">
      <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
       WHY CHOOSE US
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </div>
  </div>
  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
    Everything You Need
    <span className="block text-lg font-normal text-gray-600 mt-3">
      Powerful features designed to simplify and accelerate your product management workflow.
    </span>
  </h3>
</div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 
                         hover:border-transparent transition-all duration-300 
                         hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl 
                           group-hover:border-gradient-to-r group-hover:from-blue-500/20 
                           group-hover:to-purple-500/20" />

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 blur-xl rounded-2xl`} />
                <div className={`relative w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {item.highlight}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Hover Indicator */}
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 
                            group-hover:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                            rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}