import { Heart, Shield, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We prioritize your comfort and well-being, providing personalized attention throughout your healthcare journey."
    },
    {
      icon: Shield,
      title: "Quality Healthcare",
      description: "Delivering exceptional medical services with the highest standards of quality and patient safety."
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description: "Our team of board-certified doctors and healthcare professionals are leaders in their respective fields."
    },
    {
      icon: Award,
      title: "Accredited Facilities",
      description: "Fully accredited healthcare facilities meeting international standards of quality and patient care."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From vision to reality: How Foresight Healthcare is transforming healthcare delivery in Africa through innovation and commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Our Journey
              </h3>
              <div className="text-lg text-gray-600 space-y-4 leading-relaxed text-justify">
                <p>
                  Dr. Aliyu has a conviction of a better and safer healthcare for Africa, that is why he incubated the idea of this company and hatched it while he was still in the United Kingdom. The company was registered in Nigeria in 2016 and registered in the UK in 2017, to conduct business in England, Scotland and Wales.
                </p>
                <p>
                  The company was initially meant to provide safe landing for Nigerians and Africans sourcing their healthcare beyond the shores of Africa. We provided these services through partnerships with many hospitals in Asia and Europe. Despite great opportunities he had living in the UK for over a decade, Dr. Aliyu decided to return to Nigeria to expand this vision of having safer and better healthcare for Africa.
                </p>
                <p>
                  Foresight Healthcare grew from supplying medical equipment and providing medical travel facilitation to owning and managing three hospitals across the country and managing two other hospitals under Public-Private and Private-Private Partnership in Nigeria. We also provide Healthcare Consultancy Services for many hospitals across the country to help them improve their healthcare service delivery.
                </p>
                <p>
                  The main objectives of the Company are to make healthcare qualitative, available, accessible, and affordable to every Nigerian and also to make Nigeria one of the Medical Tourist destinations. We plan to achieve this objective through partnerships with like-minded individuals and companies in Nigeria and throughout Africa until we reach universal health coverage (UHC).
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;