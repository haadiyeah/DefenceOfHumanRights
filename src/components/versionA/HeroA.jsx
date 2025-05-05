function HeroA() {
    return (
      <div className="relative bg-gray-900 text-white">
        {/* Replace with your own emotional image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Every Person Has the Right to Be Found</h1>
            <p className="text-xl mb-8">Reuniting families, restoring hope, and fighting for those who have disappeared. Join our mission to bring the missing home.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-involved" className="px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors text-center">Help Find The Missing</a>
              <a href="#stories" className="px-6 py-3 bg-gray-800 text-white font-medium rounded hover:bg-black transition-colors text-center">Read Their Stories</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroA;