import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiInstagram, FiMail, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';

const OrderPage = () => {
  const phoneNumber = "6282231682308";
  const [selectedProduct, setSelectedProduct] = useState('');
  const [customerName, setCustomerName] = useState('');
  
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Halo SORA Wear, saya mau pesan ${selectedProduct ? selectedProduct : '[nama produk]'}. Terima kasih!`
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  return (
    <div className="bg-primary">
      {/* Hero Banner */}
      <div className="relative py-16 bg-secondary">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">Cara Order</h1>
          <p className="max-w-xl mx-auto">
            Proses order di SORA Wear sangat mudah dan cepat. Ikuti panduan di bawah ini untuk mendapatkan koleksi fashion favorit Anda.
          </p>
        </div>
      </div>
      
      {/* Order Steps */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Langkah-langkah Order</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Pilih Produk</h3>
              <p className="text-gray-600">
                Pilih produk yang Anda inginkan dari katalog kami. Pastikan untuk memeriksa detail ukuran dan warna yang tersedia.
              </p>
              <Link to="/catalog" className="inline-flex items-center text-dark hover:text-accent mt-4 font-medium">
                Lihat Katalog <FiArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Klik Tombol Beli</h3>
              <p className="text-gray-600">
                Pada halaman detail produk, klik tombol "Beli via WhatsApp" untuk memulai proses pemesanan langsung.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Order via WhatsApp</h3>
              <p className="text-gray-600">
                Konfirmasikan pesanan Anda dengan customer service kami melalui WhatsApp, lalu lakukan pembayaran sesuai instruksi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Order Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title">Pesan Sekarang</h2>
            
            <div className="bg-secondary bg-opacity-30 p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="customerName" className="block mb-2 font-medium">Nama Anda</label>
                <input 
                  type="text" 
                  id="customerName"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Masukkan nama Anda"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="productName" className="block mb-2 font-medium">Produk yang Ingin Dipesan</label>
                <input 
                  type="text" 
                  id="productName"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Contoh: Eliza Floral Blouse - Size M - Color White"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                />
              </div>
              
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center text-center"
              >
                <FiShoppingBag className="mr-2" /> Pesan via WhatsApp
              </a>
              
              <p className="text-center text-sm mt-4 text-gray-600">
                Customer service kami akan merespon dalam waktu 1x24 jam
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Methods */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Metode Pembayaran</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">BCA</span>
                </div>
                <p className="text-sm text-gray-600">Transfer Bank BCA</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">BNI</span>
                </div>
                <p className="text-sm text-gray-600">Transfer Bank BNI</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">DANA</span>
                </div>
                <p className="text-sm text-gray-600">E-wallet DANA</p>
              </div>
            </div>
            
            <div className="mt-8 bg-accent bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-4">Proses Pembayaran:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Pilih metode pembayaran yang Anda inginkan</li>
                <li>Admin akan mengirimkan nomor rekening/akun untuk transfer</li>
                <li>Lakukan pembayaran dan kirim bukti transfer</li>
                <li>Pesanan Anda akan diproses setelah pembayaran dikonfirmasi</li>
                <li>Anda akan mendapatkan nomor resi pengiriman</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      {/* Shipping Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Informasi Pengiriman</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-medium mb-4">Jasa Pengiriman</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    JNE (Regular & YES)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    J&T Express
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    SiCepat
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    AnterAja
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Estimasi Pengiriman</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Jabodetabek: 1-2 hari
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Jawa: 2-3 hari
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Luar Jawa: 3-5 hari
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Papua & Indonesia Timur: 5-7 hari
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Hubungi Kami</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiPhone className="text-dark" />
                </div>
                <h3 className="font-medium mb-2">WhatsApp</h3>
                <p className="text-gray-600">+62 812 3456 7890</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMail className="text-dark" />
                </div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@sorawear.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiInstagram className="text-dark" />
                </div>
                <h3 className="font-medium mb-2">Instagram</h3>
                <p className="text-gray-600">@sorawear</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMapPin className="text-dark" />
                </div>
                <h3 className="font-medium mb-2">Alamat</h3>
                <p className="text-gray-600">Jl. Fashion Kreatif No. 45, Bandung</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">FAQ</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Berapa lama proses pengiriman?</h3>
              <p className="text-gray-600">
                Pesanan Anda akan diproses dalam 1-2 hari kerja. Lama pengiriman tergantung pada lokasi Anda dan jasa ekspedisi yang dipilih.
              </p>
            </div>
            
            <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Apakah ada biaya tambahan untuk pengiriman?</h3>
              <p className="text-gray-600">
                Ya, biaya pengiriman akan ditambahkan sesuai dengan berat paket dan lokasi pengiriman. Rincian biaya akan diinformasikan sebelum pembayaran.
              </p>
            </div>
            
            <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Apakah bisa melakukan penukaran barang?</h3>
              <p className="text-gray-600">
                Ya, penukaran dapat dilakukan dalam waktu 3 hari setelah barang diterima dengan syarat barang belum dipakai, masih ada label, dan dalam kondisi asli.
              </p>
            </div>
            
            <div className="bg-secondary bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Bagaimana cara melacak pesanan saya?</h3>
              <p className="text-gray-600">
                Setelah pesanan dikirim, Anda akan mendapatkan nomor resi yang dapat dilacak melalui website atau aplikasi ekspedisi terkait.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;