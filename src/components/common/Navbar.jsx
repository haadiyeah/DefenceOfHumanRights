import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-900">DHR Pakistan</h1>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="#about" className="text-gray-700 hover:text-red-900">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-red-900">Our Services</a>
              <a href="#impact" className="text-gray-700 hover:text-red-900">Our Impact</a>
              <a href="#testimonials" className="text-gray-700 hover:text-red-900">Testimonials</a>
              <a href="#get-involved" className="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-950 transition-colors">Donate Now</a>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;