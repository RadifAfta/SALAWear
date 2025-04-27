import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { FiFilter, FiX, FiShoppingBag } from 'react-icons/fi';

const CatalogPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'blouse', name: 'Blouse' },
    { id: 'dress', name: 'Dress' },
    { id: 'hijab', name: 'Hijab' },
    { id: 'pants', name: 'Celana' },
  ];
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary bg-opacity-30 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-playfair mb-4">Katalog</h1>
          <p className="max-w-xl mx-auto">
            Temukan koleksi fashion terbaru SORA Wear yang akan membuat tampilan Anda lebih chic dan stylish setiap hari.
          </p>
        </div>
      </div>
      
      {/* Filter and Products */}
      <div className="container-custom py-12">
        {/* Filter for Mobile */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h2 className="text-2xl font-playfair">Produk</h2>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center text-sm font-medium"
          >
            <FiFilter className="mr-2" /> Filter
          </button>
        </div>
        
        {/* Mobile Filter Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-50 p-6 transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium">Filter</h3>
            <button onClick={() => setIsFilterOpen(false)} className="text-xl">
              <FiX />
            </button>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Kategori</h4>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsFilterOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    activeCategory === category.id ? 'bg-accent text-dark' : 'hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xl font-medium mb-6">Filter</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Kategori</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-4 py-2 rounded ${
                        activeCategory === category.id ? 'bg-accent text-dark' : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg">Tidak ada produk yang ditemukan.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <Link to={`/catalog/${product.id}`} key={product.id} className="group">
                    <div className="relative overflow-hidden mb-4">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {product.isNewArrival && (
                        <div className="absolute top-2 left-2 bg-accent py-1 px-2 rounded-full text-xs">
                          New
                        </div>
                      )}
                      
                      {product.isBestSeller && (
                        <div className="absolute top-2 right-2 bg-white py-1 px-2 rounded-full text-xs">
                          Best Seller
                        </div>
                      )}
                      
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;