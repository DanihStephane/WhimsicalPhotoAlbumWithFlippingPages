import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    caption: "Coucher de soleil sur la mer"
  },
  {
    url: "https://images.unsplash.com/photo-1682687221038-404670f09561",
    caption: "Montagnes majestueuses"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538", 
    caption: "Forêt paisible"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
    caption: "Lac de montagne"
  },
  {
    url: "https://images.unsplash.com/photo-1682687220067-dced0c5bf699",
    caption: "Champs de lavande"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipProgress, setFlipProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const turnPage = (direction: 'next' | 'prev') => {
    setIsFlipping(true);
    const duration = 600;
    const steps = 20;
    const increment = 100 / steps;
    let progress = 0;

    const animate = () => {
      progress += increment;
      setFlipProgress(direction === 'next' ? progress : 100 - progress);

      if (progress < 100) {
        setTimeout(animate, duration / steps);
      } else {
        if (direction === 'next' && currentPage < photos.length - 1) {
          setCurrentPage(prev => prev + 1);
        } else if (direction === 'prev' && currentPage > 0) {
          setCurrentPage(prev => prev - 1);
        }
        setIsFlipping(false);
        setFlipProgress(0);
      }
    };

    animate();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center p-8">
      {/* Title and Description */}
      <div className="title-container text-center mb-12 max-w-2xl">
        <h1 className="handwritten text-5xl font-bold text-amber-800 mb-4">
          Mon Album Photo
        </h1>
        <p className="subtitle text-xl text-amber-700 opacity-90">
          Une collection de moments précieux capturés dans le temps, 
          chaque page raconte une histoire unique...
        </p>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Book container with enhanced 3D effects */}
      <div 
        className="relative w-full max-w-4xl perspective-2000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative aspect-[3/2] bg-white rounded-xl book-container transition-transform duration-500 ${
            isHovered ? 'hover-lift' : ''
          }`}
        >
          {/* Book cover shadow */}
          <div className="absolute -inset-4 bg-black/20 rounded-xl blur-xl -z-10 book-shadow transition-all duration-500"></div>

          {/* Book spine effect with enhanced gradient */}
          <div className="absolute inset-y-0 left-1/2 w-8 bg-gradient-to-r from-amber-200/30 via-amber-100/20 to-amber-50/30 transform -translate-x-1/2 z-10 spine-shadow"></div>

          {/* Left Page */}
          <div className="absolute inset-0 w-1/2 bg-white rounded-l-xl page-shadow">
            {currentPage > 0 && (
              <div className="h-full p-6 flex flex-col justify-center items-center">
                <div className="relative w-full transform hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={photos[currentPage - 1].url}
                    alt={photos[currentPage - 1].caption}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 shadow-inner rounded-lg"></div>
                  <div className="page-fold"></div>
                </div>
                <p className="mt-4 text-center text-gray-700 handwritten text-xl">
                  {photos[currentPage - 1].caption}
                </p>
              </div>
            )}
          </div>

          {/* Right Page */}
          <div className="absolute left-1/2 inset-y-0 w-1/2 bg-white rounded-r-xl page-shadow">
            <div className="h-full p-6 flex flex-col justify-center items-center">
              <div className="relative w-full transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={photos[currentPage].url}
                  alt={photos[currentPage].caption}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 shadow-inner rounded-lg"></div>
                <div className="page-fold"></div>
              </div>
              <p className="mt-4 text-center text-gray-700 handwritten text-xl">
                {photos[currentPage].caption}
              </p>
            </div>
          </div>

          {/* Flipping Page with enhanced 3D effect */}
          {isFlipping && (
            <div 
              className="absolute inset-y-0 w-1/2 bg-white origin-left page-shadow"
              style={{
                left: '50%',
                transform: `rotateY(${-flipProgress * 1.8}deg)`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transition: 'transform 0.05s linear',
                boxShadow: `
                  ${flipProgress < 90 
                    ? '2px 0 12px rgba(0,0,0,0.15)' 
                    : '-2px 0 12px rgba(0,0,0,0.15)'}
                `,
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                <div className="relative w-full">
                  <img 
                    src={photos[currentPage].url}
                    alt={photos[currentPage].caption}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 shadow-inner rounded-lg"></div>
                  <div 
                    className="page-fold"
                    style={{
                      transform: `rotateY(${flipProgress}deg)`,
                    }}
                  ></div>
                </div>
                <p className="mt-4 text-center text-gray-700 handwritten text-xl">
                  {photos[currentPage].caption}
                </p>
              </div>
              {/* Back of the flipping page */}
              <div 
                className="absolute inset-0 p-6 flex flex-col justify-center items-center backface-hidden"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {currentPage < photos.length - 1 && (
                  <>
                    <div className="relative w-full">
                      <img 
                        src={photos[currentPage + 1].url}
                        alt={photos[currentPage + 1].caption}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 shadow-inner rounded-lg"></div>
                      <div className="page-fold"></div>
                    </div>
                    <p className="mt-4 text-center text-gray-700 handwritten text-xl">
                      {photos[currentPage + 1].caption}
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Navigation Controls with enhanced styling */}
          <div className="absolute bottom-4 left-4 z-20">
            {currentPage > 0 && (
              <button
                onClick={() => !isFlipping && turnPage('prev')}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-amber-100 transition-all duration-300 transform hover:scale-110 nav-button-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-amber-800" />
              </button>
            )}
          </div>
          <div className="absolute bottom-4 right-4 z-20">
            {currentPage < photos.length - 1 && (
              <button
                onClick={() => !isFlipping && turnPage('next')}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-amber-100 transition-all duration-300 transform hover:scale-110 nav-button-shadow"
              >
                <ChevronRight className="w-6 h-6 text-amber-800" />
              </button>
            )}
          </div>

          {/* Enhanced Page Corner Effect */}
          {!isFlipping && (
            <div 
              className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(135deg, transparent 50%, rgba(251, 191, 36, 0.2) 50%)',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                animation: 'cornerLift 2s ease-in-out infinite'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;