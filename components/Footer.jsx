import { Facebook, Twitter, Instagram, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "API", href: "/api" },
      { label: "Documentation", href: "/docs" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],

  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: "Shoyaib@productify.com" },
    { icon: <Phone size={18} />, text: "01743870639" },
    { icon: <MapPin size={18} />, text: "Dhaka,Bangladesh" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-black via-black to-gray-900">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
      
      {/* Main footer */}
      <div className="mx-auto w-10/12 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-16">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                <span className="text-2xl font-black text-white">P</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Productify
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Building the future of product management. Streamline, organize, and scale your product journey.
            </p>
            
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg p-2.5 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <div className="h-0.5 w-0 group-hover:w-3 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  <div className="rounded-lg bg-white/5 p-2">
                    {info.icon}
                  </div>
                  <span className="hover:text-white transition-colors">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-medium text-white mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 font-medium text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Productify. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}