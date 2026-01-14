// app/layout.jsx
import Navbar from "@/components/Navbar";
import "../app/globals.css"
import Footer from "@/components/Footer";


export const metadata = {
  title: "Productify",
  description: "Simple product management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="min-h-screen px-6 py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
