import { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { FiStar } from 'react-icons/fi';

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.product.toLowerCase().includes(activeFilter));
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FiStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="py-16 bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Testimoni Pelanggan</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Apa kata pelanggan kami tentang produk SORA Wear? Berikut adalah beberapa ulasan dari pelanggan setia kami.
          </p>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-secondary' : 'bg-white border border-gray-200'}`}
            onClick={() => setActiveFilter('all')}
          >
            Semua
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'dress' ? 'bg-secondary' : 'bg-white border border-gray-200'}`}
            onClick={() => setActiveFilter('dress')}
          >
            Dress
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'blouse' ? 'bg-secondary' : 'bg-white border border-gray-200'}`}
            onClick={() => setActiveFilter('blouse')}
          >
            Blouse
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'hijab' ? 'bg-secondary' : 'bg-white border border-gray-200'}`}
            onClick={() => setActiveFilter('hijab')}
          >
            Hijab
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'pants' ? 'bg-secondary' : 'bg-white border border-gray-200'}`}
            onClick={() => setActiveFilter('pants')}
          >
            Pants
          </button>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="mb-4 italic">"{testimonial.review}"</p>
              <p className="text-sm text-gray-500">Produk: {testimonial.product}</p>
            </div>
          ))}
        </div>
        
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p>Belum ada testimoni untuk kategori ini.</p>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-16 text-center bg-accent bg-opacity-10 p-8 rounded-lg">
          <h2 className="text-2xl font-playfair mb-4">Bergabunglah dengan Pelanggan Bahagia Kami</h2>
          <p className="mb-6">Jelajahi koleksi kami dan temukan fashion yang sesuai dengan gayamu.</p>
          <a href="/catalog" className="btn-primary">Lihat Katalog</a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;