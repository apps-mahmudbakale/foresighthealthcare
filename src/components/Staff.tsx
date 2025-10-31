import { useState } from 'react';
import { Brain, Heart, Bone, ChevronDown, ChevronUp } from 'lucide-react';
import Shamsudeen from '../assets/DSC_0820.jpg';
import Bashir from '../assets/Jajala.jpg';
import Said from '../assets/Saeed.jpg';
import Aliyu from '../assets/Takori.jpg';
import Abbas from '../assets/Abbas.jpg';
import Hadiza from '../assets/Kahdija.jpg';
import Funmilayo from '../assets/Fumi.jpg';

const Staff = () => {
  const [expandedBios, setExpandedBios] = useState<Record<number, boolean>>({});

  const toggleBio = (index: number) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  const doctors = [
    {
      name: "Dr. Shamsudeen Aliyu",
      title: "MD/ Chief Executive Officer",
      image: Shamsudeen,
      specialties: ["Neuroradiology", "MRI Interpretation", "Diagnostic Imaging"],
      education: "Harvard Medical School",
      experience: "18+ years",
      bio: "Dr. Aliyu holds medical and advanced degrees from Nigeria, the UK, and Germany, including a PhD from Hull York Medical School. A Member of the Royal College of Radiologists and a Distinguished Fellow of the Institute of Leadership Manpower and Management Development, he has received several local and international awards, notably the British Council Award for Business and Innovation.",
      icon: Brain
    },
    {
      name: "Dr Jalaluddeen M. Bashir G/Kanawa",
      title: "Director Research And Development",
      image: Bashir,
      education: "Johns Hopkins University",
      experience: "15+ years",
      bio: "Dr. Muhammad Jalaluddeen Bashir holds MBBS from Medical University Varna, Bulgaria. He is a Senior consultant in Internal Medicine with subspecialty in Cardiology at Elisabeth Klinikum Schmalkalden, Germany. He is also trained and cer fied Intensive Care/Emergency Practioner in Germany.",
      icon: Heart
    },
    {
      name: "Mr. Sa’id Umar",
      title: "Strategy & Business Development Director",
      image: Said,
      specialties: ["Musculoskeletal Radiology", "CT Scans", "Interventional Radiology"],
      education: "Mayo Clinic College of Medicine",
      experience: "12+ years",
      bio: "Mr. Sa’id Umar holds a BSC (Hons) in Accountng from The University of Manchester, UK and is also Certified Chartered Accountant with the Association of Chartered Certified Accountants(ACCA). He has vast business experience in various sectors including Finance, Real Estate, Healthcare, Oil & Gas, Agriculture and information Technology. ",
      icon: Bone
    },
     {
      name: "Mr. Aliyu Tokori",
      title: "Business Resource Manager",
      image: Aliyu,
      specialties: ["Musculoskeletal Radiology", "CT Scans", "Interventional Radiology"],
      education: "Mayo Clinic College of Medicine",
      experience: "12+ years",
      bio: "Mr. Aliyu Takori, a distinguished alumnus of Maryam Abacha American University, holds a BSc in Public Health (Second Class Upper Division). He further earned a Master’s in Public Health and a Master’s in International Affairs and Diplomacy from Ahmadu Bello University, Zaria. Complementing his expertise, he holds a certificate in Monitoring and Evaluation of Global Health from the University of Washington and a Project Management Professional (PMP) certification. ",
      icon: Bone
    },
     {
      name: "Abbas Bello Nagwari",
      title: "Business Development Manager",
      image: Abbas,
      specialties: ["Musculoskeletal Radiology", "CT Scans", "Interventional Radiology"],
      education: "Mayo Clinic College of Medicine",
      experience: "12+ years",
      bio: "Abbas Nagwari is an experienced healthcare project manager who managed 100 other employees as the inaugural business manager of the Sokoto State Advanced Medical Diagnostic Center in Sokoto. For a period of two years, he successfully held the position. He holds a Bachelor's degree in geography, a Master's degree in business administration, a Diploma in business management and entrepreneurship, and a number of certifications, including a Certificate on Coaching and Mentoring, a Certificate on Professional Ethics and Business Management, and a Certificate on Professional Healthcare Quality.",
      icon: Bone
    },
     {
      name: "Mrs. Hadiza Shehu Umar",
      title: "Financial Analyst",
      image: Hadiza,
      specialties: ["Musculoskeletal Radiology", "CT Scans", "Interventional Radiology"],
      education: "Mayo Clinic College of Medicine",
      experience: "12+ years",
      bio: "Mrs Hadiza Shehu has BSc Economics, MSc Economics (inview), a Chartered Accountant, and a member of the association of National Accountants of Nigeria (ANAN). Served in the past as an accountant at Foresight Premier Hospitals Abuja, Internal Auditor Sokoto State Advanced Medical Diagnostic Center. And a private accountant and financial advisor of various companies such as Alliance Medical Solutions, RadHub Medical Imaging Solutions, as well as Crimeshield Security and General Services, among others ",
      icon: Bone
    },
    {
      name: "Ms. Funmilayo Olawuni Esq.",
      title: "Strategic Partnerships Manager",
      image: Funmilayo,
      specialties: ["Musculoskeletal Radiology", "CT Scans", "Interventional Radiology"],
      education: "Mayo Clinic College of Medicine",
      experience: "12+ years",
      bio: "Ms. Funmilayo Olawuni esq. is a legal professional who holds an Llb from the University of Abuja. She holds years of experience as a compliance officer with a speciality in medical law. She received a human resource management certificate from the international organization of management professionals."
    }
  ];

  
  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our board-certified radiologists and experienced technologists are dedicated to 
            providing accurate diagnoses with the latest imaging technology and compassionate care.
          </p>
        </div>

        {/* Doctors */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h4>
                  <p className="text-blue-600 font-semibold mb-6">{doctor.title}</p>
                  <div className="relative">
                    <p className={`text-gray-600 leading-relaxed text-justify ${!expandedBios[index] ? 'line-clamp-3' : ''}`}>
                      {expandedBios[index] ? doctor.bio : truncateText(doctor.bio, 150)}
                    </p>
                    {doctor.bio.length > 150 && (
                      <button 
                        onClick={() => toggleBio(index)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 flex items-center gap-1"
                      >
                        {expandedBios[index] ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications & Accreditations */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certifications & Accreditations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">ACR Accredited</p>
              <p className="text-sm text-gray-600">Imaging Excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">Joint Commission</p>
              <p className="text-sm text-gray-600">Accredited</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">AAMI Standards</p>
              <p className="text-sm text-gray-600">Compliant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-900">State Licensed</p>
              <p className="text-sm text-gray-600">Fully Approved</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Staff;