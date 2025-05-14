import type { Route } from "../+types/root";
import Layout from "../components/Layout";

export function meta() {
  return [
    { title: "About | Ramadan Waly" },
    { name: "description", content: "Learn about Ramadan Waly's master craftsmanship and furniture expertise." },
  ];
}

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-sky-900 mb-12 text-center">Master Craftsman</h1>
          
          {/* Profile Section */}
          <div className="bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581612129334-551ccd2c6a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Carpenter at work" 
                  className="rounded-lg shadow-md w-full h-auto max-h-[400px] object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold text-sky-900 mb-6">Crafting Excellence Since 1995</h2>
                <p className="text-sky-800 text-lg leading-relaxed mb-6">
                  With over 25 years of experience in fine woodworking, I bring traditional craftsmanship into the modern era. Each piece I create is a unique blend of timeless techniques and contemporary design, ensuring furniture that's not just beautiful, but built to last generations.
                </p>
                <p className="text-sky-800 text-lg leading-relaxed mb-8">
                  Specializing in custom furniture, historic restorations, and bespoke cabinetry, I work closely with clients to bring their visions to life. Every project receives the same dedication to detail and excellence, whether it's a simple coffee table or an entire home's worth of custom furnishings.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium">Custom Furniture</span>
                  <span className="px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium">Historic Restoration</span>
                  <span className="px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium">Fine Woodworking</span>
                  <span className="px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium">Bespoke Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-sky-900">Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sky-100 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-medium text-sky-900 mb-2">Custom Furniture Design</h4>
                <p className="text-sky-800">Creating unique pieces tailored to each client's specific needs and preferences, from concept to completion.</p>
              </div>
              <div className="bg-sky-100 rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-medium text-sky-900 mb-2">Restoration Services</h4>
                <p className="text-sky-800">Breathing new life into antique and vintage furniture while preserving their historical integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 