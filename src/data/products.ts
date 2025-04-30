export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'blouse' | 'dress' | 'hijab' | 'pants';
    images: string[];
    description: string;
    colors: string[];
    sizes: string[];
    isNewArrival: boolean;
    isBestSeller: boolean;
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Eliza Floral Blouse",
      price: 189000,
      category: "blouse",
      images: [
        "/assets/eliza-blouse.jpeg",
        "/assets/eliza-blouse.jpeg",
        "/assets/eliza-blouse.jpeg"
      ],
      description: "Blouse cantik dengan motif floral yang memberikan kesan feminin. Dibuat dari bahan rayon premium yang nyaman dipakai sepanjang hari.",
      colors: ["White", "Dusty Pink", "Mint"],
      sizes: ["S", "M", "L", "XL"],
      isNewArrival: true,
      isBestSeller: false
    },
    {
      id: "2",
      name: "Lily Square Hijab",
      price: 89000,
      category: "hijab",
      images: [
        "/assets/eliza-blouse.jpeg",
        "/assets/eliza-blouse.jpeg"
      ],
      description: "Hijab segiempat dengan bahan voal premium yang ringan dan nyaman. Cocok untuk acara formal maupun casual.",
      colors: ["Cream", "Navy", "Olive", "Terracotta"],
      sizes: ["115x115 cm"],
      isNewArrival: false,
      isBestSeller: true
    },
    {
      id: "3",
      name: "Lyla Midi Dress",
      price: 269000,
      category: "dress",
      images: [
        "/assets/lily.jpeg",
        "/assets/lily.jpeg",
      ],
      description: "Midi dress simple dengan cutting yang flattering. Sangat cocok untuk acara semi formal atau hang out bersama teman.",
      colors: ["Black", "Cream", "Sage Green"],
      sizes: ["S", "M", "L", "XL"],
      isNewArrival: true,
      isBestSeller: true
    },
    {
      id: "4",
      name: "Amara Wide Leg Pants",
      price: 210000,
      category: "pants",
      images: [
        "/assets/amara.jpeg",
        "/assets/amara.jpeg"
      ],
      description: "Celana kulot dengan bahan katun yang nyaman dan breathable. Model wide leg yang sedang tren dan memberikan kesan tinggi.",
      colors: ["Khaki", "Black", "Navy", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      isNewArrival: false,
      isBestSeller: true
    },
    {
      id: "5",
      name: "Zara Button Blouse",
      price: 179000,
      category: "blouse",
      images: [
        "/assets/zara.jpeg",
        "/assets/zara.jpeg"
      ],
      description: "Blouse bertali dengan detail kancing di depan. Modern dan versatile, cocok dipakai untuk berbagai acara.",
      colors: ["White", "Peach", "Lilac"],
      sizes: ["S", "M", "L"],
      isNewArrival: false,
      isBestSeller: false
    },
    {
      id: "6",
      name: "Freya Pashmina",
      price: 95000,
      category: "hijab",
      images: [
        "/assets/freya.jpeg"
      ],
      description: "Pashmina dengan bahan diamond crepe yang lembut dan tidak mudah kusut. Nyaman dipakai seharian.",
      colors: ["Dusty Pink", "Blue Sky", "Peach", "Brown", "Black"],
      sizes: ["175x75 cm"],
      isNewArrival: true,
      isBestSeller: false
    },
    {
      id: "7",
      name: "Kayla Flare Dress",
      price: 249000,
      category: "dress",
      images: [
        "/assets/kayla.jpg",
        "/assets/kayla.jpg",
      ],
      description: "Dress dengan siluet A-line yang cantik dan feminin. Dibuat dari bahan crepe premium yang jatuh dengan indah.",
      colors: ["Maroon", "Navy", "Emerald"],
      sizes: ["S", "M", "L", "XL"],
      isNewArrival: true,
      isBestSeller: false
    },
    {
      id: "8",
      name: "Naomi Pleated Pants",
      price: 230000,
      category: "pants",
      images: [
        "/assets/naomi.jpeg",
        "/assets/naomi.jpeg",
      ],
      description: "Celana kulot dengan detail plisket yang memberi kesan elegan. Bahan tidak menerawang dan tidak panas.",
      colors: ["Black", "Cream", "Gray"],
      sizes: ["S", "M", "L"],
      isNewArrival: false,
      isBestSeller: false
    }
  ];