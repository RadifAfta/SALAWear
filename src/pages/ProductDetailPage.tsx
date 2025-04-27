import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { FiChevronRight, FiShoppingBag, FiHeart, FiShare2 } from 'react-icons/fi';

// Menghapus import yang tidak digunakan
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  
  // Create WhatsApp order link
  const createWhatsAppLink = () => {
    if (!product) return '';
    
    const message = `Halo SORA Wear, saya mau pesan ${product.name} dengan detail:\n- Warna: ${selectedColor || 'belum dipilih'}\n- Ukuran: ${selectedSize || 'belum dipilih'}\nMohon informasi ketersediaan dan proses pembelian. Terima kasih.`;
    
    return `https://wa.me/6282231682308?text=${encodeURIComponent(message)}`;
  };
  
  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
      
      // Set default color and size if available
      if (foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      
      // Find related products with same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [productId]);
  
  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="text-2xl font-medium">Produk tidak ditemukan</h2>
        <Link to="/catalog" className="text-accent mt-4 inline-block">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center text-sm">
            <Link to="/" className="hover:text-accent">Home</Link>
            <FiChevronRight className="mx-2" />
            <Link to="/catalog" className="hover:text-accent">Katalog</Link>
            <FiChevronRight className="mx-2" />
            <span className="font-medium">{product.name}</span>
          </nav>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`border rounded overflow-hidden ${selectedImage === image ? 'border-accent' : 'border-gray-200'}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-playfair mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">{formatPrice(product.price)}</p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Deskripsi</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Warna</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`px-4 py-2 border rounded-full ${
                        selectedColor === color 
                        ? 'border-accent bg-accent bg-opacity-10' 
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-8">
                <h3 className="font-medium mb-2">Ukuran</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-full ${
                        selectedSize === size 
                        ? 'border-accent bg-accent bg-opacity-10' 
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Buy Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={createWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex-1 flex items-center justify-center"
              >
                <FiShoppingBag className="mr-2" /> Beli via WhatsApp
              </a>
              
              <button className="px-4 py-3 border border-gray-300 rounded hover:bg-gray-50 transition">
                <FiHeart />
              </button>
              
              <button className="px-4 py-3 border border-gray-300 rounded hover:bg-gray-50 transition">
                <FiShare2 />
              </button>
            </div>
            
            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="mb-4">
                <h3 className="font-medium mb-1">Kategori</h3>
                <p className="capitalize">{product.category}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Share</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-accent">Instagram</a>
                  <a href="#" className="hover:text-accent">Facebook</a>
                  <a href="#" className="hover:text-accent">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <h2 className="section-title">Produk Terkait</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <Link 
                  to={`/catalog/${product.id}`} 
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;