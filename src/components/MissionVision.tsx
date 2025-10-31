import { Target, Eye, HeartPulse } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Purpose */}
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <HeartPulse className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h3>
            <p className="text-gray-600 leading-relaxed">
              Our main purpose is to make quality healthcare accessible and affordable to all Nigerians.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become one of the leading healthcare providers in Nigeria.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              It is our goal to provide our CLIENTS with superior quality healthcare products and services, 
              make our EMPLOYEES proud, and our INVESTORS seek for long‑term returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
