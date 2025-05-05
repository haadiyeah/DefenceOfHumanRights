import bgImage from '../../assets/protest.png'; 

function StatsSection() {
    return (
      <section id="stats" className="py-16 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.1'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-900 mb-2">2,273</div>
              <p className="text-gray-700">Total Cases Registered</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-900 mb-2">1,368</div>
              <p className="text-gray-700">Still Disappeared</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-900 mb-2">582</div>
              <p className="text-gray-700">Released Persons</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-900 mb-2">236</div>
              <p className="text-gray-700">Traced Persons</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-900 mb-2">87</div>
              <p className="text-gray-700">Confirmed Dead</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-4">Our Strategic Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="inline-block mr-3 w-4 h-4 bg-red-900 rounded-full"></span>
                    <span>Legal support for 1,100+ families seeking justice</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block mr-3 w-4 h-4 bg-red-900 rounded-full"></span>
                    <span>Psychosocial support programs for 800+ affected individuals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block mr-3 w-4 h-4 bg-red-900 rounded-full"></span>
                    <span>50+ advocacy campaigns resulting in policy changes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block mr-3 w-4 h-4 bg-red-900 rounded-full"></span>
                    <span>25+ investigative reports published since founding</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div 
                  className="w-full h-64 md:h-full rounded-lg"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#get-involved" className="inline-block px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors">Support Our Work</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default StatsSection;