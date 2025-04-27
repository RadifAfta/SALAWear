import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="container-custom text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-6xl font-playfair font-bold mb-2">404</h1>
          <h2 className="text-2xl font-medium mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          <FiArrowLeft className="mr-2" /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;