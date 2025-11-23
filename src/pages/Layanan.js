import React, { useState, useEffect } from 'react';

const Layanan = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: "🚀",
      title: "PREMIUM DAILY RENTAL",
      description: "Experience ultimate luxury with our premium fleet for daily rentals. Perfect for business meetings, events, or special occasions.",
      features: ["Free Pickup & Delivery", "Comprehensive Insurance", "24/7 Premium Support", "Flexible Cancellation"],
      price: "START FROM Rp 500K",
      gradient: "from-blue-500 to-cyan-500",
      badge: "MOST POPULAR",
      stats: "500+ DAILY RENTALS"
    },
    {
      icon: "💼",
      title: "CORPORATE SOLUTIONS",
      description: "Exclusive transportation solutions for enterprises with dedicated fleet management and executive services.",
      features: ["Fleet Management", "Monthly Analytics", "Dedicated Account Manager", "Custom Billing"],
      price: "CUSTOM QUOTE",
      gradient: "from-purple-500 to-pink-500",
      badge: "ENTERPRISE",
      stats: "100+ COMPANIES"
    },
    {
      icon: "✈️",
      title: "AIRPORT CONCIERGE",
      description: "Premium airport transfer service with flight tracking and executive meet & greet services.",
      features: ["Executive Meeting Point", "Real-time Flight Tracking", "Complimentary 2hr Wait", "Luggage Assistance"],
      price: "START FROM Rp 300K",
      gradient: "from-green-500 to-teal-500",
      badge: "PREMIUM",
      stats: "50+ AIRPORTS"
    },
    {
      icon: "🏨",
      title: "LUXURY TOUR PACKAGES",
      description: "Curated travel experiences with luxury vehicles and professional tour guidance.",
      features: ["Expert Tour Guides", "Custom Itineraries", "Premium Accommodations", "Photo Services"],
      price: "START FROM Rp 2.5M",
      gradient: "from-orange-500 to-red-500",
      badge: "EXPERIENCE",
      stats: "200+ DESTINATIONS"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "FAMILY EXCELLENCE",
      description: "Family-focused luxury vehicles with enhanced safety features and spacious comfort.",
      features: ["Child Safety Seats", "Extra Luggage Space", "Family-trained Chauffeurs", "Entertainment System"],
      price: "START FROM Rp 700K",
      gradient: "from-indigo-500 to-blue-500",
      badge: "FAMILY",
      stats: "1000+ FAMILIES"
    },
    {
      icon: "🔧",
      title: "ELITE MAINTENANCE",
      description: "Comprehensive maintenance and 24/7 support ensuring your vehicle remains in pristine condition.",
      features: ["Regular Premium Check-ups", "Emergency Support", "15-min Response Time", "Mobile Service"],
      price: "INCLUDED FREE",
      gradient: "from-yellow-500 to-orange-500",
      badge: "SUPPORT",
      stats: "24/7 SERVICE"
    }
  ];

  const features = [
    { icon: "🛡️", text: "Full Comprehensive Insurance" },
    { icon: "⭐", text: "5-Star Rated Chauffeurs" },
    { icon: "🔒", text: "Enhanced Safety Protocols" },
    { icon: "💎", text: "Premium Vehicle Maintenance" }
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container-custom py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
            <span className="text-sm font-semibold text-green-400">ELITE SERVICES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Premium</span>{' '}
            <span className="text-gradient">Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury with our curated services designed for the discerning client. 
            Every detail is crafted for <span className="text-gradient font-semibold">excellence and comfort</span>.
          </p>
        </div>

        {/* Auto-rotating Feature Banner */}
        <div className="glass rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-white/10">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl animate-bounce">{features[currentFeature].icon}</span>
            <span className="text-lg font-semibold text-white">{features[currentFeature].text}</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative glass rounded-3xl p-8 transition-all duration-700 transform hover:scale-105 ${
                hoveredCard === index ? 'scale-105 ring-2 ring-cyan-500/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-4 py-1 border border-white/10">
                    <span className="text-xs font-bold text-cyan-400">{service.badge}</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="text-2xl font-black text-gradient mb-4">
                {service.price}
              </div>

              {/* Stats */}
              <div className="text-sm text-cyan-400 font-semibold mb-6">
                {service.stats}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full glass-dark hover:bg-white/10 border border-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:glow group">
                <span className="flex items-center justify-center space-x-2">
                  <span>SELECT SERVICE</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Bottom Glow */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto mb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-3xl font-black text-white mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our elite concierge team is ready to create personalized service packages for your specific needs.
            </p>
            <button className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">Contact Concierge Service</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-secondary group">
              <span className="relative z-10">Download Service Catalog</span>
            </button>
            <button className="glass hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-white/10">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;