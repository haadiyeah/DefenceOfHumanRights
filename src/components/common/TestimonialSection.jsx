import photo1 from '../../assets/children.png';
import photo2 from '../../assets/protest.png';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

function TestimonialSection() {
  const cardHoverVariants = {
    hover: { 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="testimonials" className="relative py-16">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${photo1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Voices of Hope</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <img src={photo1} alt="Fatima K." className="h-16 w-16 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold">Fatima K.</h3>
                  <p className="text-gray-600">Family member of a released person</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "When my brother disappeared, I felt hopeless. DHR not only provided legal assistance but became like family to us. Their support helped us stay strong until he was released after two years."
              </p>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <img src={photo2} alt="Ahmed S." className="h-16 w-16 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold">Ahmed S.</h3>
                  <p className="text-gray-600">Human rights activist</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "DHR Pakistan's documentation and advocacy work has been instrumental in bringing international attention to enforced disappearances. Their systematic approach creates accountability where none existed before."
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;