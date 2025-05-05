import { motion } from 'framer-motion';
import bgImage from '../../assets/children.png';

function HeroA() {
  const buttonHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <div 
      className="relative bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Every Person Has the Right to Be Found</h1>
          <p className="text-xl mb-8">Reuniting families, restoring hope, and fighting for those who have disappeared. Join our mission to bring the missing home.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#get-involved" 
              className="px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors text-center"
              variants={buttonHoverVariants}
              whileHover="hover"
            >
              Help Find The Missing
            </motion.a>
            <motion.a 
              href="#stories" 
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded hover:bg-black transition-colors text-center"
              variants={buttonHoverVariants}
              whileHover="hover"
            >
              Read Their Stories
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroA;