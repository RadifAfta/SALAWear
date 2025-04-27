import { Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { FiArrowRight, FiStar, FiShoppingBag } from 'react-icons/fi';

// Menghapus import Swiper yang tidak digunakan
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {
  const [newArrivals] = useState(products.filter(product => product.isNewArrival));
  const [bestSellers] = useState(products.filter(product => product.isBestSeller));
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-secondary">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/api/placeholder/1600/900')`,
            opacity: 0.7
          }}
        ></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-playfair mb-6">
              Tampil Chic Setiap Hari
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Koleksi Terbaru dari SORA Wear
            </p>
            <p className="mb-8 italic text-lg">
              Diskon 20% untuk pembelian pertama
            </p>
            <Link 
              to="/catalog" 
              className="btn-primary inline-flex items-center"
            >
              Lihat Koleksi <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">New Arrivals</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.slice(0, 4).map((product) => (
              <Link to={`/catalog/${product.id}`} key={product.id} className="group">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="flex items-center justify-center w-full text-sm font-medium">
                      <FiShoppingBag className="mr-2" /> Lihat Detail
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-dark">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/catalog" 
              className="inline-flex items-center text-dark hover:text-accent transition-colors font-medium"
            >
              Lihat Semua Koleksi <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Feature Banner */}
      <section className="py-16 bg-accent bg-opacity-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/src/assets/sorawear.png" 
                alt="SORA Wear Collection" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">Kenapa Memilih SORA Wear?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-xl mb-2">Kualitas Premium</h3>
                  <p>Kami memilih bahan berkualitas untuk memastikan kenyamanan dan ketahanan produk kami.</p>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Desain Lokal</h3>
                  <p>Setiap produk dirancang dengan cinta oleh desainer lokal berbakat yang memahami kebutuhan Anda.</p>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Ramah Lingkungan</h3>
                  <p>Proses produksi kami mengutamakan keberlanjutan dan penggunaan bahan yang ramah lingkungan.</p>
                </div>
              </div>
              <Link to="/about" className="btn-primary inline-block mt-8">
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Sellers - Tanpa Swiper */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Best Sellers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <Link to={`/catalog/${product.id}`} key={product.id} className="block group">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-white py-1 px-2 rounded-full text-sm">
                    Best Seller
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-dark">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram Feed */}
      <section className="py-16 bg-secondary bg-opacity-30">
        <div className="container-custom">
          <h2 className="section-title">Follow Us @sorawear</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                key={index}
                className="block group relative overflow-hidden"
              >
                <img 
                  src={`src/assets/sorawear.png`} 
                  alt="Instagram post" 
                  className="w-full h-auto aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiStar className="text-white text-2xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent bg-opacity-10">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Dapatkan Update Terbaru
          </h2>
          <p className="mb-8">
            Daftar untuk mendapatkan info koleksi terbaru dan penawaran spesial.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button 
              type="submit" 
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;