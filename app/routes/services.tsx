import type { Route } from "../+types/root";
import Layout from "../components/Layout";

export function meta() {
  return [
    { title: "Services | Ramadan Waly" },
    { name: "description", content: "Discover our range of bespoke furniture services and craftsmanship solutions." },
  ];
}

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Our Furniture Services</h1>
          <p className="text-xl text-sky-800 max-w-2xl mx-auto">Expert craftsmanship and bespoke furniture solutions for your home</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Custom Bedroom Furniture */}
          <div className="bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-4">Custom Bedroom Furniture</h3>
            <p className="text-sky-800 mb-4">Bespoke bedroom furniture crafted to your exact specifications and style preferences.</p>
            <ul className="text-sky-800 space-y-2">
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Wardrobes & Closets</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Bed Frames & Headboards</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Bedside Tables</li>
            </ul>
          </div>

          {/* Kitchen Design */}
          <div className="bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-4">Kitchen Design & Installation</h3>
            <p className="text-sky-800 mb-4">Complete kitchen solutions from design to installation, creating your perfect cooking space.</p>
            <ul className="text-sky-800 space-y-2">
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Custom Cabinetry</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Kitchen Islands</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Storage Solutions</li>
            </ul>
          </div>

          {/* Furniture Restoration */}
          <div className="bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-4">Furniture Restoration</h3>
            <p className="text-sky-800 mb-4">Expert restoration services to bring your cherished furniture pieces back to life.</p>
            <ul className="text-sky-800 space-y-2">
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Antique Restoration</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Repairs & Refinishing</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Upholstery Services</li>
            </ul>
          </div>

          {/* Door and Window Fitting */}
          <div className="bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-4">Door & Window Fitting</h3>
            <p className="text-sky-800 mb-4">Professional installation of custom doors and windows to enhance your home.</p>
            <ul className="text-sky-800 space-y-2">
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Custom Door Installation</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Window Fitting</li>
              <li className="flex items-center"><span className="text-sky-600 mr-2">•</span> Frame Repairs</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="mailto:ramadan.waly@outlook.com" className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors inline-block">Request a Quote</a>
        </div>
      </div>
    </Layout>
  );
} 