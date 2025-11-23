import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Kendaraan = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filters = [
    { id: 'all', name: 'All Vehicles' },
    { id: 'suv', name: 'SUV' },
    { id: 'sedan', name: 'Sedan' },
    { id: 'mpv', name: 'MPV' },
    { id: 'sports', name: 'Sports' }
  ];

  const vehicles = [
    {
      id: 1,
      name: "Toyota Alphard",
      type: "MPV Premium",
      category: "mpv",
      price: "Rp 1.200.000",
      period: "/hari",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400",
      features: ["7 Kursi", "Auto AC", "LED Screen", "Leather Seat"],
      badge: "POPULAR",
      discount: "15% OFF",
      specs: { power: "250HP", transmission: "Auto", fuel: "Premium" }
    },
    {
      id: 2,
      name: "BMW 3 Series",
      type: "Sedan Luxury",
      category: "sedan",
      price: "Rp 900.000",
      period: "/hari",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      features: ["5 Kursi", "Sunroof", "Premium Sound", "Sport Mode"],
      badge: "LUXURY",
      discount: "10% OFF",
      specs: { power: "255HP", transmission: "8-Speed", fuel: "Premium" }
    },
    // Tambahkan lebih banyak vehicle...
  ];

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === activeFilter);

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom py-20 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-ping"></div>
            <span className="text-sm font-semibold text-cyan-400">PREMIUM FLEET</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="text-gradient">Vehicle</span>{' '}
            <span className="text-white">Collection</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our exclusive collection of premium vehicles, each meticulously maintained for your luxury experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white glow'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative glass rounded-3xl overflow-hidden transition-all duration-700 transform hover:scale-105"
            >
              {/* Vehicle Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">{vehicle.name}</h3>
                <p className="text-gray-400 mb-4">{vehicle.type}</p>
                <div className="text-2xl font-black text-gradient mb-4">
                  {vehicle.price}<span className="text-lg text-gray-400">{vehicle.period}</span>
                </div>
                <Link 
                  to={`/kendaraan/${vehicle.id}`}
                  className="btn-primary w-full text-center block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kendaraan;