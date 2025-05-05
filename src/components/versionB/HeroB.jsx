import { motion } from 'framer-motion';
import heroImage from '../../assets/young-and-old.png';

function HeroB() {
    return (
      <div className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">2,273 Cases. 1,368 Still Missing.</h1>
            <p className="text-xl mb-8">We document, trace, and advocate for victims of enforced disappearances in Pakistan. Our proven impact speaks through numbers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#get-involved" 
                className="px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Work
              </motion.a>
              <motion.a 
                href="#stats" 
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded hover:bg-black transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Impact
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  
export default HeroB;