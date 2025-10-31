import { CheckCircle, ClipboardList, Building2, Plane, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ClipboardList,
      title: "Healthcare Project Management",
      description: "End-to-end project management for healthcare facilities, ensuring timely and efficient project delivery.",
      features: ["Facility planning", "Resource allocation", "Timeline management", "Quality assurance"],
      color: "blue"
    },
    {
      icon: Building2,
      title: "Healthcare Project Development",
      description: "Comprehensive development services for healthcare facilities from concept to completion.",
      features: ["Feasibility studies", "Regulatory compliance", "Design & construction", "Commissioning"],
      color: "green"
    },
    {
      icon: Plane,
      title: "Reversed Medical Tourism",
      description: "Facilitating high-quality medical care for international patients in Nigeria and across Africa.",
      features: ["Treatment coordination", "Travel arrangements", "Multilingual support", "Post-treatment care"],
      color: "purple"
    },
    {
      icon: Users,
      title: "Healthcare Management Consultancy",
      description: "Expert advisory services to optimize healthcare service delivery and operational efficiency.",
      features: ["Process improvement", "Quality management", "Staff training", "Performance evaluation"],
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'bg-blue-100 text-blue-600',
          title: 'text-blue-900',
          feature: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'bg-green-100 text-green-600',
          title: 'text-green-900',
          feature: 'text-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          icon: 'bg-purple-100 text-purple-600',
          title: 'text-purple-900',
          feature: 'text-purple-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'bg-gray-100 text-gray-600',
          title: 'text-gray-900',
          feature: 'text-gray-600'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Foresight Healthcare offers specialized services designed to transform healthcare delivery in Africa through innovative solutions and expert management.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index}
                className={`border rounded-2xl p-8 transition-all hover:shadow-lg ${colors.bg} ${colors.border}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colors.icon}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${colors.title}`}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${colors.feature}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>


        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Healthcare?</h3>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss how we can help with your healthcare project or service needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;