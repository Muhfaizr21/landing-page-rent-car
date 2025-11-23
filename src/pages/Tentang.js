import React, { useState, useEffect } from 'react';

const Tentang = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [stats, setStats] = useState({ clients: 0, vehicles: 0, cities: 0, trips: 0 });

  const milestones = [
    { year: "2018", event: "Company Founded", description: "Started with 5 premium vehicles" },
    { year: "2019", event: "First Enterprise Client", description: "Partnered with Fortune 500 company" },
    { year: "2020", event: "Fleet Expansion", description: "Grew to 50+ luxury vehicles" },
    { year: "2022", event: "International Service", description: "Expanded to 10+ countries" },
    { year: "2024", event: "Premium Innovation", description: "Launched AI-powered booking system" }
  ];

  const team = [
    {
      name: "Alexandra Chen",
      role: "CEO & Founder",
      image: "👩‍💼",
      description: "20+ years in luxury automotive industry",
      specialty: "Business Strategy"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Operations", 
      image: "👨‍💼",
      description: "Former operations director at luxury hotel chain",
      specialty: "Service Excellence"
    },
    {
      name: "Sophie Williams",
      role: "Fleet Manager",
      image: "👩‍🔧", 
      description: "15 years in premium vehicle maintenance",
      specialty: "Quality Assurance"
    },
    {
      name: "David Kim",
      role: "Client Relations",
      image: "👨‍💻",
      description: "Expert in corporate client management", 
      specialty: "Customer Experience"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We deliver nothing but the best in every aspect of our service"
    },
    {
      icon: "🤝", 
      title: "Integrity",
      description: "Honest and transparent in all our business dealings"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly evolving to provide cutting-edge solutions"
    },
    {
      icon: "❤️",
      title: "Passion", 
      description: "Genuine love for delivering exceptional experiences"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone(prev => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate stats counting
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    const animateStat = (start, end, setter) => {
      let current = start;
      const increment = (end - start) / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setter(Math.floor(current));
      }, stepDuration);
    };

    animateStat(0, 10000, (val) => setStats(prev => ({...prev, clients: val})));
    animateStat(0, 500, (val) => setStats(prev => ({...prev, vehicles: val})));
    animateStat(0, 50, (val) => setStats(prev => ({...prev, cities: val})));
    animateStat(0, 25000, (val) => setStats(prev => ({...prev, trips: val})));
  }, []);

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-ping"></div>
            <span className="text-sm font-semibold text-cyan-400">OUR STORY</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Redefining</span>{' '}
            <span className="text-gradient">Luxury Mobility</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 6 years, we've been at the forefront of premium transportation, 
            delivering <span className="text-gradient font-semibold">unforgettable experiences</span> to discerning clients worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: stats.clients.toLocaleString(), label: 'Satisfied Clients', suffix: '+' },
            { number: stats.vehicles, label: 'Premium Vehicles', suffix: '+' },
            { number: stats.cities, label: 'Cities Covered', suffix: '+' },
            { number: stats.trips.toLocaleString(), label: 'Luxury Trips', suffix: '+' }
          ].map((stat, index) => (
            <div key={index} className="text-center glass rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-300 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-black text-white mb-6">Our Journey</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded in 2018 with a vision to transform luxury transportation, we started with just 5 premium vehicles 
              and an unwavering commitment to excellence.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Today, we're proud to serve Fortune 500 companies, luxury hotels, and discerning individuals across 
              50+ cities worldwide, maintaining our founding principles of quality and innovation.
            </p>
            
            {/* Auto-rotating Milestone */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-cyan-400">🎯</div>
                <div>
                  <div className="text-white font-semibold">{milestones[currentMilestone].year} - {milestones[currentMilestone].event}</div>
                  <div className="text-cyan-400 text-sm">{milestones[currentMilestone].description}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-8 transform rotate-2 border border-white/10">
              <div className="glass-dark rounded-2xl p-8 transform -rotate-2">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <p className="text-white font-semibold">Award Winning Service</p>
                    <p className="text-cyan-400 text-sm">Since 2018</p>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-8 left-12 w-4 h-4 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center glass rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-black text-white text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass rounded-3xl p-6 text-center border border-white/10 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-xl font-black text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm mb-3">{member.description}</p>
                <div className="text-xs text-purple-400 bg-purple-400/10 rounded-full px-3 py-1 inline-block">
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-cyan-500/20">
            <h3 className="text-3xl font-black text-white mb-4">
              Join Our Success Story
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the luxury mobility revolution. Partner with us for exceptional transportation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Partner With Us
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;