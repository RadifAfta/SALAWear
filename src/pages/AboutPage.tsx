import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary bg-opacity-30 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-playfair mb-4">Tentang Kami</h1>
          <p className="max-w-xl mx-auto">
            Mengenal lebih dekat tentang SORA Wear dan perjalanan kami dalam industri fashion lokal.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/sorawear.png" 
                alt="SORA Wear Story" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair mb-6">Cerita Kami</h2>
              <p className="mb-4">
                SORA Wear didirikan pada tahun 2020 oleh dua sahabat yang memiliki passion di bidang fashion. Berawal dari keinginan untuk menciptakan pakaian yang nyaman, stylish, dan terjangkau bagi perempuan Indonesia, kami memulai perjalanan kami dengan koleksi kecil yang terdiri dari 5 blouse dan 3 hijab.
              </p>
              <p className="mb-4">
                Nama SORA diambil dari kata Jepang yang berarti "langit", melambangkan harapan kami untuk terus berkembang tanpa batas, seperti langit yang luas. Konsep kami sederhana: menciptakan pakaian yang membuat perempuan merasa nyaman dan percaya diri dalam aktivitas sehari-hari mereka.
              </p>
              <p>
                Seiring berkembangnya waktu, SORA Wear terus tumbuh dan kini memiliki lebih dari 100 produk dengan berbagai kategori. Kami bangga dapat menjadi bagian dari industri fashion lokal yang terus berkembang di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-secondary bg-opacity-20">
        <div className="container-custom">
          <h2 className="section-title">Nilai-Nilai Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <FiCheck className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4">Kualitas</h3>
              <p>
                Kami selalu memastikan setiap produk dibuat dari bahan berkualitas tinggi dan melalui proses produksi yang teliti untuk memberikan pengalaman terbaik kepada pelanggan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <FiCheck className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4">Keberlanjutan</h3>
              <p>
                SORA Wear berkomitmen untuk meminimalkan dampak lingkungan dengan menggunakan bahan yang ramah lingkungan dan menerapkan praktik produksi yang berkelanjutan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <FiCheck className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4">Pemberdayaan</h3>
              <p>
                Kami percaya dalam memberdayakan komunitas lokal, terutama perempuan. Sebagian besar tim produksi kami adalah perempuan yang kami latih dan berikan kesempatan untuk berkembang.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Behind the Scenes */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Behind the Scenes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-4">
                Setiap produk SORA Wear melalui proses kreatif yang panjang. Mulai dari inspirasi awal, sketsa desain, pemilihan bahan, hingga proses produksi yang diawasi dengan ketat untuk memastikan kualitas terbaik.
              </p>
              <p>
                Tim desainer kami terus mengikuti tren fashion terkini sambil tetap mempertahankan esensi dari brand SORA Wear: simple, elegant, dan comfortable. Kami juga mempertimbangkan feedback dari pelanggan dalam proses desain dan pengembangan produk.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Proses produksi kami melibatkan kolaborasi dengan pengrajin lokal untuk menciptakan pakaian yang tidak hanya fashionable tetapi juga nyaman dipakai sehari-hari. Setiap jahitan, potongan, dan detail diperhatikan dengan seksama.
              </p>
              <p>
                Kami percaya bahwa fashion tidak hanya tentang penampilan, tetapi juga cerita dan nilai di baliknya. Itulah mengapa kami selalu berusaha untuk transparan mengenai proses di balik setiap produk kami.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/assets/sorawear.png" alt="Behind the scenes" className="w-full h-auto rounded-lg" />
            <img src="/assets/sorawear.png" alt="Behind the scenes" className="w-full h-auto rounded-lg" />
            <img src="/assets/sorawear.png" alt="Behind the scenes" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-secondary bg-opacity-20">
        <div className="container-custom">
          <h2 className="section-title">Tim Kami</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/assets/sorawear.png" alt="Team Member" className="w-48 h-48 object-cover mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-1">Sari Wijaya</h3>
              <p className="text-gray-600 mb-2">Founder & Creative Director</p>
              <p className="text-sm">
                Mencintai desain dan fashion sejak muda, Sari berfokus pada konsep dan arah kreatif SORA Wear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/assets/sorawear.png" alt="Team Member" className="w-48 h-48 object-cover mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-1">Ratih Dewi</h3>
              <p className="text-gray-600 mb-2">Co-Founder & Business Development</p>
              <p className="text-sm">
                Dengan latar belakang bisnis, Ratih mengelola aspek operasional dan strategi pemasaran SORA Wear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/assets/sorawear.png" alt="Team Member" className="w-48 h-48 object-cover mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-1">Adi Permana</h3>
              <p className="text-gray-600 mb-2">Production Manager</p>
              <p className="text-sm">
                Adi memastikan standar kualitas tertinggi dalam setiap tahap produksi SORA Wear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/assets/sorawear.png" alt="Team Member" className="w-48 h-48 object-cover mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-1">Dina Maulida</h3>
              <p className="text-gray-600 mb-2">Fashion Designer</p>
              <p className="text-sm">
                Dina menghadirkan ide-ide segar dan inovatif dalam setiap koleksi SORA Wear.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-accent bg-opacity-10">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-3xl font-playfair mb-6">Jelajahi Koleksi Kami</h2>
          <p className="mb-8">
            Temukan koleksi SORA Wear yang akan membuat gaya Anda lebih chic dan stylish setiap hari.
          </p>
          <Link to="/catalog" className="btn-primary inline-block">
            Lihat Katalog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;