"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, User, ShoppingBag, Plus, LogOut } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  CHECK AUTH STATUS
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://productify-bakend.vercel.app/api/auth/me", {
          credentials: "include",
        });
        const data = await res.json();
        setIsAuthenticated(data.authenticated === true);
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [pathname]); 

  // LOGOUT
  const handleLogout = async () => {
    await fetch("https://productify-bakend.vercel.app/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setIsAuthenticated(false);
    router.push("/login");
    router.refresh();
  };

  // NAV LINKS (Add Product ONLY if logged in)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products", icon: <ShoppingBag size={16} /> },

    ...(isAuthenticated
      ? [
          {
            href: "/add-product",
            label: "Add Product",
            icon: <Plus size={16} />,
          },
        ]
      : []),
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
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <span className="text-lg font-black text-white">P</span>
              </div>
              <span className="text-xl md:text-2xl font-black text-white">
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
                {!isAuthenticated ? (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 font-medium text-white"
                  >
                    <User size={18} />
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 rounded-lg bg-white/5 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="flex flex-col space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-white hover:bg-white/10"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 pt-2 border-t border-white/10">
                {!isAuthenticated ? (
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg bg-indigo-600 px-4 py-3 text-white"
                  >
                    <User size={18} />
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 text-white"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
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
      {icon}
      <span>{children}</span>
    </Link>
  );
}
