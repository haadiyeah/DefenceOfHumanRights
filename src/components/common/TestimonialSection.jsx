import photo1 from '../../assets/children.png'
import photo2 from '../../assets/protest.png'


function TestimonialSection() {
    return (
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Voices of Hope</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
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
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
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
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default TestimonialSection;