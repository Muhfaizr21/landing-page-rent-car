import React, { useState } from 'react';

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: "+62 21 1234 5678",
      description: "Mon-Sun, 24/7 Support",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "✉️",
      title: "Email", 
      details: "hello@luxuryrent.com",
      description: "Response within 2 hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📍",
      title: "Head Office",
      details: "Jl. Sudirman No. 123",
      description: "Jakarta Selatan, Indonesia",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: "🕒", 
      title: "Business Hours",
      details: "24/7 Every Day",
      description: "Including holidays",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const offices = [
    {
      city: "Jakarta",
      address: "Jl. Sudirman No. 123, Jakarta Selatan",
      phone: "+62 21 1234 5678",
      hours: "24/7"
    },
    {
      city: "Surabaya", 
      address: "Jl. Tunjungan No. 45, Surabaya",
      phone: "+62 31 9876 5432",
      hours: "6AM - 10PM"
    },
    {
      city: "Bali",
      address: "Jl. Raya Kuta No. 78, Bali", 
      phone: "+62 361 123 4567",
      hours: "24/7"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! Your message has been sent. We will contact you within 2 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
            <span className="text-sm font-semibold text-green-400">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Let's Start</span>{' '}
            <span className="text-gradient">Your Journey</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium mobility? Our team is here to provide personalized solutions 
            for your <span className="text-gradient font-semibold">luxury transportation needs</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-black text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-dark border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-dark border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-dark border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white"
                >
                  <option value="">Select inquiry type</option>
                  <option value="corporate">Corporate Rental</option>
                  <option value="personal">Personal Rental</option>
                  <option value="partnership">Partnership</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 glass-dark border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your luxury transportation needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-lg text-cyan-400 font-semibold mb-1">{info.details}</p>
                  <p className="text-sm text-gray-400">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Office Locations */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-black text-white mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 glass-dark rounded-xl hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{office.city}</h4>
                      <p className="text-gray-300 text-sm mb-2">{office.address}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span>📞 {office.phone}</span>
                        <span>🕒 {office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                    <span className="text-white text-2xl">🗺️</span>
                  </div>
                  <p className="text-white font-semibold">Interactive Map</p>
                  <p className="text-cyan-400 text-sm">Click to view locations</p>
                </div>
              </div>
              <button className="w-full mt-4 glass-dark hover:bg-white/10 border border-white/10 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-cyan-500/20">
            <h3 className="text-3xl font-black text-white mb-4">
              Prefer to Talk Directly?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our luxury concierge team is available 24/7 to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:glow">
                📞 CALL NOW: +62 21 1234 5678
              </button>
              <button className="glass border-2 border-white/30 hover:border-cyan-400 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                💬 LIVE CHAT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;