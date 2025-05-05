import { motion } from 'framer-motion';
import { ScrollReveal } from '../common/ScrollReveal';
import janjuaFamilySearchPicture from '../../assets/kids-protest.png';
import communityOfHopePicture from '../../assets/protest.png';

function StorySection() {
  const cardHoverVariants = {
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="stories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Their Stories Need to Be Heard</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="mb-4 h-48">
                <img 
                  src={janjuaFamilySearchPicture} 
                  alt="Children protesting for their missing family members" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">The Janjua Family's Search</h3>
              <p className="text-gray-700 mb-4">
                "The journey began when my husband, Mr. Masood Janjua, and his friend Faisal disappeared on July 30, 2005. What followed was years of searching, advocating, and building a movement to find not just my husband, but all those who have disappeared."
              </p>
              <p className="italic text-gray-600">- Amina Masood Janjua, Chairperson and Founder</p>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="mb-4 h-48">
                <img 
                  src={communityOfHopePicture} 
                  alt="Community members protesting" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">A Community of Hope</h3>
              <p className="text-gray-700 mb-4">
                "We decided not to give up hope or struggle in the face of even the worst kind of atrocities. Together with other victims' families, we laid the foundations of Defence of Human Rights Pakistan, a platform that has been growing and achieving milestones of success over the years."
              </p>
              <p className="italic text-gray-600">- DHR Pakistan Member</p>
            </motion.div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="mt-12 text-center">
            <a href="#get-involved" className="inline-block px-6 py-3 bg-red-900 text-white font-medium rounded hover:bg-red-950 transition-colors">Join Our Movement</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default StorySection;