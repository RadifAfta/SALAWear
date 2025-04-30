export interface Testimonial {
    id: string;
    name: string;
    image: string;
    rating: number;
    review: string;
    product: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ratna Dewi",
      image: "/assets/pevita.jpeg",
      rating: 5,
      review: "Kualitas bahan dari dress SORA Wear sangat nyaman dipakai seharian. Ukurannya juga pas dan sesuai dengan ekspektasi. Pasti akan belanja lagi!",
      product: "Lyla Midi Dress"
    },
    {
      id: "2",
      name: "Anisa Firdaus",
      image: "/assets/pevita.jpeg",
      rating: 5,
      review: "Hijab dari SORA ternyata bahan premium banget, ga nyesel beli. Warnanya juga cantik dan ga luntur setelah dicuci. Recommended!",
      product: "Lily Square Hijab"
    },
    {
      id: "3",
      name: "Diana Putri",
      image: "/assets/pevita.jpeg",
      rating: 4,
      review: "Blouse-nya cantik dan sesuai foto. Pengiriman juga cepat dan respon adminnya ramah. Saya suka!",
      product: "Eliza Floral Blouse"
    },
    {
      id: "4",
      name: "Larasati",
      image: "/assets/pevita.jpeg",
      rating: 5,
      review: "Ini sudah ke-5 kalinya saya beli di SORA Wear dan tidak pernah mengecewakan. Celana kulotnya nyaman dan bahan premium.",
      product: "Amara Wide Leg Pants"
    },
    {
      id: "5",
      name: "Fina Amalia",
      image: "/assets/pevita.jpeg",
      rating: 4,
      review: "Suka banget sama semua koleksi SORA Wear! Selalu update dan mengikuti tren fashion terkini. Kualitas juga terjamin.",
      product: "Kayla Flare Dress"
    },
    {
      id: "6",
      name: "Mira Safitri",
      image: "/assets/pevita.jpeg",
      rating: 5,
      review: "Admin ramah, pengiriman cepat, dan yang paling penting bahannya bagus dan jahitannya rapi. Worth every penny!",
      product: "Zara Button Blouse"
    }
  ];