import { Star, Quote, Users, Heart, TrendingUp } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahim Uddin",
      role: "Online Seller",
      rating: 5,
      text: "Productify has revolutionized how I manage my online store. The intuitive interface and powerful features saved me hours every week. Highly recommended for any e-commerce business!",
      avatar: "RU",
      stats: "250+ Products",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Nusrat Jahan",
      role: "Small Business Owner",
      rating: 5,
      text: "As someone new to product management, Productify made everything so simple. The bulk upload feature and inventory tracking helped me scale my business 3x faster than expected.",
      avatar: "NJ",
      stats: "3x Growth",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Tanvir Hasan",
      role: "E-commerce Manager",
      rating: 5,
      text: "The analytics dashboard alone is worth the subscription. Real-time insights helped us optimize our product strategy and increase sales by 40% in just two months.",
      avatar: "TH",
      stats: "40% Sales ↑",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Sadia Akter",
      role: "Product Manager",
      rating: 5,
      text: "Team collaboration features are exceptional. My team can now work simultaneously on product updates, and the version control ensures we never lose any data.",
      avatar: "SA",
      stats: "10 Team Members",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Arif Hossain",
      role: "Startup Founder",
      rating: 5,
      text: "The API integration capabilities saved us months of development time. We seamlessly connected Productify with our existing systems in just a few days.",
      avatar: "AH",
      stats: "API Integration",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Tasnim Rahman",
      role: "Digital Entrepreneur",
      rating: 5,
      text: "Customer support is outstanding! Whenever I had questions, the team responded within minutes. This level of service is rare in SaaS products.",
      avatar: "TR",
      stats: "24/7 Support",
      color: "from-pink-500 to-rose-500"
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">

      
      <div className="relative w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
<div>
  <div className="flex items-center gap-3 mb-4">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
      <div className="relative p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <Quote className="h-5 w-5 text-gradient from-blue-600 to-purple-600" />
      </div>
    </div>
    <div className="space-y-1">
      <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
        TRUSTED REVIEWS
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </div>
  </div>
  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
     Loved by Thousands
    <span className="block text-lg font-normal text-gray-600 mt-3">
    Join 10,000+ product teams who have transformed their workflow with Productify.
    </span>
  </h3>
</div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 mt-10">
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              10K+
            </div>
            <div className="text-sm text-gray-600 mt-2">Active Users</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              4.9★
            </div>
            <div className="text-sm text-gray-600 mt-2">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-gray-600 mt-2">Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-sm text-gray-600 mt-2">Countries</div>
          </div>
        </div>

{/* Auto Sliding Testimonials */}
<div className="relative overflow-hidden mt-10">
  <div className="flex gap-6 animate-testimonials">
    {[...reviews, ...reviews].map((review, i) => (
      <div
        key={i}
        className="min-w-[350px] max-w-[350px]
                   group relative bg-white rounded-2xl border border-gray-200 p-6 
                   hover:border-transparent transition-all duration-300 
                   hover:shadow-2xl hover:-translate-y-2"
      >
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-16 h-16 text-purple-600" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-900">
            {review.rating}.0
          </span>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          "{review.text}"
        </p>

        {/* User Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full 
                          bg-gradient-to-br ${review.color} text-white font-bold`}
            >
              {review.avatar}
            </div>
            <div>
              <p className="font-bold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-600">{review.role}</p>
            </div>
          </div>

          <div className="text-xs font-semibold text-gray-900">
            {review.stats}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



      </div>
    </section>
  );
}