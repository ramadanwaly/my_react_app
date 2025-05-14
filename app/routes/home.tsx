import type { Route } from "../+types/root";
import Layout from "../components/Layout";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Home | Ramadan Waly" },
    { name: "description", content: "Welcome to Ramadan Waly's Furniture Crafting Services" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-sky-900 mb-8">Welcome to Your Digital Journey</h1>
          <p className="text-xl text-sky-800 mb-12 leading-relaxed">Discover how we can transform your ideas into reality with our innovative solutions and expert services.</p>
          
          {/* Placeholder for optional image */}
          <div className="mb-12">
            <img src="https://placehold.co/600x400" alt="Welcome" className="rounded-xl shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300 w-full max-w-lg h-auto"/>
          </div>

          {/* Main Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              Learn About Us
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
