import { motion } from 'framer-motion';
import { ScrollReveal } from '../common/ScrollReveal';
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
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact in Numbers</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[2273, 1368, 582, 236, 87].map((number, index) => (
            <ScrollReveal key={index}>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-red-900 mb-2">{number}</div>
                <p className="text-gray-700">
                  {index === 0 && "Total Cases Registered"}
                  {index === 1 && "Still Disappeared"}
                  {index === 2 && "Released Persons"}
                  {index === 3 && "Traced Persons"}
                  {index === 4 && "Confirmed Dead"}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
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
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="mt-12 text-center">
            <motion.a 
              href="#get-involved" 
              className="inline-block px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Our Work
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default StatsSection;