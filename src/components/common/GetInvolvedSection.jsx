
function GetInvolvedSection() {
    return (
      <section id="get-involved" className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Involved</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Donate</h3>
              <p className="mb-4">
                Your financial support helps us continue our work in documenting cases, providing legal assistance, and supporting affected families.
              </p>
              <button className="w-full py-3 bg-white text-red-900 font-medium rounded hover:bg-gray-200 transition-colors">
                Make a Donation
              </button>
            </div>
            
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="mb-4">
                Join our team of dedicated volunteers to help with case documentation, legal research, family support, and awareness campaigns.
              </p>
              <button className="w-full py-3 bg-white text-red-900 font-medium rounded hover:bg-gray-200 transition-colors">
                Become a Volunteer
              </button>
            </div>
            
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Report a Case</h3>
              <p className="mb-4">
                If you know of someone who has disappeared, contact us to report the case and receive guidance on the next steps. This is crucial to maintain and document records.
              </p>
              <button className="w-full py-3 bg-white text-red-900 font-medium rounded hover:bg-gray-200 transition-colors">
                Report a Disappearance
              </button>
            </div>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Stay Connected</h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded text-gray-900"
              />
              <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-black transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default GetInvolvedSection;