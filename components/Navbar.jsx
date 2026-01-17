"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, ShoppingBag, Plus } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products", icon: <ShoppingBag size={16} /> },
    { href: "/add-product", label: "Add Product", icon: <Plus size={16} /> },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-black border-b border-white/10"
        }`}
      >
        <div className="mx-auto w-10/12 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                  <span className="text-lg md:text-xl font-black text-white">
                    P
                  </span>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent tracking-tight">
                Productify
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  isActive={pathname === link.href}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="ml-4 pl-4 border-l border-white/10">
                <Link
                  href="/login"
                  className="group relative flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-5 py-2.5 font-medium text-white transition-all hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  <User size={18} className="opacity-80" />
                  <span>Login</span>
                  <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/30 transition-colors"></div>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="relative md:hidden p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-5 duration-200">
            <div className="border-t border-white/10 bg-black backdrop-blur-xl px-4 py-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.icon && (
                        <span className="opacity-80">{link.icon}</span>
                      )}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  );
                })}

                <div className="mt-2 pt-2 border-t border-white/10">
                  <Link
                    href="/login"
                    className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 font-medium text-white transition-all hover:opacity-90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} />
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

function NavLink({ href, children, icon, isActive }) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-2 rounded-lg px-4 py-2.5 font-medium transition-all ${
        isActive ? "text-white" : "text-white/80 hover:text-white"
      }`}
    >
      {icon && (
        <span
          className={`transition-opacity ${
            isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
          }`}
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
      <span
        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-all duration-300 ${
          isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
        }`}
      />
    </Link>
  );
}
