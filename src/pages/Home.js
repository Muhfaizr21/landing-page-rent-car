import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const features = [
    { 
      icon: '⚡', 
      text: 'Book in 60 Seconds', 
      desc: 'Instant reservation system',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      icon: '🎯', 
      text: 'Luxury Fleet', 
      desc: 'Premium vehicles only',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      icon: '🛡️', 
      text: 'Full Protection', 
      desc: 'Complete insurance coverage',
      color: 'from-green-400 to-emerald-500'
    },
    { 
      icon: '⭐', 
      text: '5-Star Service', 
      desc: 'Exclusive VIP treatment',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const vehicles = [
    {
      name: "Rolls Royce Phantom",
      price: "Rp 5.000.000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      type: "ULTRA LUXURY"
    },
    {
      name: "Mercedes S-Class",
      price: "Rp 2.500.000", 
      image: "https://images.unsplash.com/photo-1563720223485-884b46ce7c9a?w=800",
      type: "EXECUTIVE"
    },
    {
      name: "Range Rover Autobiography", 
      price: "Rp 3.500.000",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      type: "PREMIUM SUV"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "TechCorp CEO",
      text: "Best luxury car service I've ever experienced. The attention to detail is incredible!",
      rating: 5
    },
    {
      name: "Sarah Williams", 
      company: "Global Enterprises",
      text: "Our corporate clients are always impressed with their premium vehicles.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      company: "Luxury Hotels Group", 
      text: "Perfect partnership for our VIP guest transportation needs.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate video load
    setTimeout(() => setVideoLoaded(true), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderStars = (count) => {
    return '⭐'.repeat(count);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section dengan Background Video */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-blue-900/90 z-10"></div>
          <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-0'}`}>
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container-custom relative z-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Main Content */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-3 mb-8 animate-pulse glow">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span className="text-sm font-bold text-white">🎯 PREMIUM LUXURY CAR RENTAL</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
                <span className="text-white block">DRIVE</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 block animate-gradient">
                  IN STYLE
                </span>
                <span className="text-white block">LIVE IN LUXURY</span>
              </h1>

              {/* Subheadline */}
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Experience <span className="font-bold text-yellow-300">ultimate comfort</span> with our premium fleet of luxury vehicles
              </p>

              {/* Auto-rotating Features */}
              <div className="glass rounded-2xl p-6 mb-8 max-w-md border border-white/20">
                <div className="flex items-center gap-4">
                  <div className={`text-4xl animate-bounce bg-gradient-to-r ${features[currentFeature].color} bg-clip-text text-transparent`}>
                    {features[currentFeature].icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{features[currentFeature].text}</div>
                    <div className="text-cyan-300 font-semibold">{features[currentFeature].desc}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link 
                  to="/kendaraan" 
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:glow overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🚗 EXPLORE OUR FLEET
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
                
                <button className="group glass border-2 border-white/30 hover:border-cyan-400 text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    📞 BOOK NOW
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Free Cancellation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Best Price Guarantee</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - 3D Car Showcase */}
            <div className="relative">
              {/* Main Car Display */}
              <div className="relative">
                <div 
                  className="glass rounded-3xl p-8 border-2 border-white/20 transform transition-transform duration-1000"
                  style={{ 
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${-mousePosition.y * 0.1}deg)`
                  }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 relative overflow-hidden">
                    {/* Animated Car */}
                    <div className="relative h-80 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-32 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-2xl relative transform transition-transform duration-500 group-hover:scale-110">
                          {/* Car Body */}
                          <div className="absolute -top-4 left-8 w-48 h-6 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full"></div>
                          {/* Wheels */}
                          <div className="absolute -bottom-3 left-4 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full border-2 border-blue-400/50 animate-spin-slow"></div>
                          <div className="absolute -bottom-3 right-4 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full border-2 border-purple-400/50 animate-spin-slow"></div>
                          {/* Headlights */}
                          <div className="absolute top-2 left-2 w-3 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                          <div className="absolute top-2 right-2 w-3 h-2 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500/20 rounded-full animate-float border border-blue-400/30 flex items-center justify-center">
                      <span className="text-blue-300">🚀</span>
                    </div>
                    <div className="absolute top-8 right-6 w-10 h-10 bg-purple-500/20 rounded-full animate-float border border-purple-400/30 flex items-center justify-center" style={{animationDelay: '1s'}}>
                      <span className="text-purple-300">💎</span>
                    </div>
                    <div className="absolute bottom-6 left-12 w-8 h-8 bg-cyan-500/20 rounded-full animate-float border border-cyan-400/30 flex items-center justify-center" style={{animationDelay: '2s'}}>
                      <span className="text-cyan-300">⭐</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 animate-bounce glow">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">🔥 TRENDING</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-4 animate-pulse glow">
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">50% OFF</div>
                    <div className="text-xs text-yellow-100">First Booking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-center">
            <div className="text-sm mb-2">Scroll to Explore</div>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">FEATURED</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                LUXURY CARS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked selection of premium vehicles for the ultimate driving experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl">🚗</div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-white">POPULAR</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white mb-2">{vehicle.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 font-bold">{vehicle.type}</span>
                    <span className="text-2xl font-black text-gradient">{vehicle.price}<span className="text-sm text-gray-400">/day</span></span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                    RENT NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/kendaraan" 
              className="inline-flex items-center gap-3 glass border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              🚗 VIEW ALL VEHICLES
              <span className="animate-pulse">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">WHAT OUR</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                CLIENTS SAY
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="text-yellow-400 text-2xl mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-200 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white text-xl">{testimonial.name}</div>
                  <div className="text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-custom relative z-10">
          <div className="glass rounded-3xl p-12 text-center border-2 border-white/20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">READY TO</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                EXPERIENCE LUXURY?
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their premium transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/kendaraan" 
                className="bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 text-white font-bold text-lg py-5 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:glow"
              >
                🚀 GET STARTED NOW
              </Link>
              <button className="glass border-2 border-white/30 hover:border-cyan-400 text-white font-bold text-lg py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105">
                📞 CALL US NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;