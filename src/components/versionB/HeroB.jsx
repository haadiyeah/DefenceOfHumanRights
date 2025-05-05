function HeroB() {
    return (
      <div className="relative bg-gray-900 text-white">
        {/* Replace with your own image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">2,273 Cases. 1,368 Still Missing.</h1>
            <p className="text-xl mb-8">We document, trace, and advocate for victims of enforced disappearances in Pakistan. Our proven impact speaks through numbers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-involved" className="px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors text-center">Support Our Work</a>
              <a href="#stats" className="px-6 py-3 bg-gray-800 text-white font-medium rounded hover:bg-black transition-colors text-center">See Our Impact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroB;