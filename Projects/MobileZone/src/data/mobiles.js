const mobilePhones = [
  {
    id: 1,
    name: "iPhone 14",
    brand: "Apple",
    price: 69999,
    image: "https://images.unsplash.com/photo-1664478546384-d57b7f0c7b4e",
    description: "Apple iPhone 14 with A15 Bionic chip and advanced dual-camera system",
    specs: {
      ram: "6 GB",
      storage: "128 GB",
      battery: "3279 mAh",
      camera: "12 MP + 12 MP",
      display: "6.1 inch OLED"
    }
  },
  {
    id: 2,
    name: "iPhone 13",
    brand: "Apple",
    price: 59999,
    image: "https://images.unsplash.com/photo-1633113215872-68f8c7a3e6f7",
    description: "Powerful iPhone with A15 Bionic and Super Retina XDR display",
    specs: {
      ram: "4 GB",
      storage: "128 GB",
      battery: "3240 mAh",
      camera: "12 MP + 12 MP",
      display: "6.1 inch OLED"
    }
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    price: 74999,
    image: "https://images.unsplash.com/photo-1675866424206-1fbe4a1d4b77",
    description: "Flagship Samsung phone with Snapdragon 8 Gen 2 processor",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      battery: "3900 mAh",
      camera: "50 MP + 12 MP + 10 MP",
      display: "6.1 inch AMOLED"
    }
  },
  {
    id: 4,
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    price: 64999,
    image: "https://images.unsplash.com/photo-1649255951241-7a8e1c58d0f1",
    description: "Premium Samsung phone with stunning AMOLED display",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "3700 mAh",
      camera: "50 MP + 12 MP + 10 MP",
      display: "6.1 inch AMOLED"
    }
  },
  {
    id: 5,
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    price: 38999,
    image: "https://images.unsplash.com/photo-1661081809144-8a67cfdc4f74",
    description: "Mid-range Samsung phone with excellent camera and battery",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 12 MP + 5 MP",
      display: "6.4 inch AMOLED"
    }
  },
  {
    id: 6,
    name: "OnePlus 11R",
    brand: "OnePlus",
    price: 39999,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    description: "High-performance phone with 120Hz AMOLED display",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 8 MP + 2 MP",
      display: "6.7 inch AMOLED"
    }
  },
  {
    id: 7,
    name: "OnePlus Nord CE 3",
    brand: "OnePlus",
    price: 29999,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    description: "Smooth OxygenOS experience with fast charging",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 8 MP + 2 MP",
      display: "6.7 inch AMOLED"
    }
  },
  {
    id: 8,
    name: "Redmi Note 12 Pro",
    brand: "Xiaomi",
    price: 24999,
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae",
    description: "Budget-friendly phone with flagship-level camera",
    specs: {
      ram: "6 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 8 MP + 2 MP",
      display: "6.67 inch AMOLED"
    }
  },
  {
    id: 9,
    name: "Redmi 12",
    brand: "Xiaomi",
    price: 14999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    description: "Affordable smartphone with solid performance",
    specs: {
      ram: "4 GB",
      storage: "64 GB",
      battery: "5000 mAh",
      camera: "50 MP + 2 MP",
      display: "6.79 inch LCD"
    }
  },
  {
    id: 10,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    price: 79999,
    image: "https://images.unsplash.com/photo-1609692814857-d668e4c7f3a1",
    description: "Premium Xiaomi flagship with Leica camera technology",
    specs: {
      ram: "12 GB",
      storage: "256 GB",
      battery: "4820 mAh",
      camera: "50 MP + 50 MP + 50 MP",
      display: "6.73 inch AMOLED"
    }
  },
  {
    id: 11,
    name: "Realme Narzo 60",
    brand: "Realme",
    price: 17999,
    image: "https://images.unsplash.com/photo-1601972599720-7a5f1e92b8f4",
    description: "Stylish phone with AMOLED display and good battery",
    specs: {
      ram: "6 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "64 MP + 2 MP",
      display: "6.43 inch AMOLED"
    }
  },
  {
    id: 12,
    name: "Realme GT Neo 3",
    brand: "Realme",
    price: 34999,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179",
    description: "Performance-focused phone with fast charging",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      battery: "5000 mAh",
      camera: "50 MP + 8 MP + 2 MP",
      display: "6.7 inch AMOLED"
    }
  },
  {
    id: 13,
    name: "Vivo V27",
    brand: "Vivo",
    price: 32999,
    image: "https://images.unsplash.com/photo-1616560117651-4b4d6f57b9f7",
    description: "Camera-centric smartphone with premium design",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "4600 mAh",
      camera: "50 MP + 8 MP + 2 MP",
      display: "6.78 inch AMOLED"
    }
  },
  {
    id: 14,
    name: "Vivo Y100",
    brand: "Vivo",
    price: 23999,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc",
    description: "Slim smartphone with AMOLED display",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "4500 mAh",
      camera: "64 MP + 2 MP",
      display: "6.38 inch AMOLED"
    }
  },
  {
    id: 15,
    name: "Oppo Reno 10",
    brand: "Oppo",
    price: 35999,
    image: "https://images.unsplash.com/photo-1600541519467-937869997e34",
    description: "Premium Oppo phone with excellent portrait camera",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      battery: "5000 mAh",
      camera: "64 MP + 32 MP + 8 MP",
      display: "6.7 inch AMOLED"
    }
  },
  {
    id: 16,
    name: "Oppo A78",
    brand: "Oppo",
    price: 18999,
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
    description: "Budget-friendly phone with fast charging support",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 2 MP",
      display: "6.56 inch LCD"
    }
  },
  {
    id: 17,
    name: "Nothing Phone (1)",
    brand: "Nothing",
    price: 29999,
    image: "https://images.unsplash.com/photo-1662105702038-4e8c9a7f0c45",
    description: "Unique transparent design with Glyph interface",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "4500 mAh",
      camera: "50 MP + 50 MP",
      display: "6.55 inch OLED"
    }
  },
  {
    id: 18,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 44999,
    image: "https://images.unsplash.com/photo-1688498739640-3b6c3e4de2ff",
    description: "Improved performance with refined Glyph interface",
    specs: {
      ram: "12 GB",
      storage: "256 GB",
      battery: "4700 mAh",
      camera: "50 MP + 50 MP",
      display: "6.7 inch OLED"
    }
  },
  {
    id: 19,
    name: "Motorola Edge 40",
    brand: "Motorola",
    price: 27999,
    image: "https://images.unsplash.com/photo-1609692814613-5b6f5f8f7a77",
    description: "Clean Android experience with curved display",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "4400 mAh",
      camera: "50 MP + 13 MP",
      display: "6.55 inch OLED"
    }
  },
  {
    id: 20,
    name: "Motorola G73",
    brand: "Motorola",
    price: 16999,
    image: "https://images.unsplash.com/photo-1596207891316-23851be3cc20",
    description: "Reliable phone with stock Android experience",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "50 MP + 8 MP",
      display: "6.5 inch LCD"
    }
  },
  {
    id: 21,
    name: "Google Pixel 7",
    brand: "Google",
    price: 59999,
    image: "https://images.unsplash.com/photo-1666746940073-5b7c5df2d9bb",
    description: "Best-in-class camera with Google Tensor chip",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "4355 mAh",
      camera: "50 MP + 12 MP",
      display: "6.3 inch OLED"
    }
  },
  {
    id: 22,
    name: "Google Pixel 6a",
    brand: "Google",
    price: 34999,
    image: "https://images.unsplash.com/photo-1659535946076-9b0c0a4a6f0c",
    description: "Compact Pixel phone with excellent photography",
    specs: {
      ram: "6 GB",
      storage: "128 GB",
      battery: "4410 mAh",
      camera: "12 MP + 12 MP",
      display: "6.1 inch OLED"
    }
  },
  {
    id: 23,
    name: "Infinix Zero 5G",
    brand: "Infinix",
    price: 19999,
    image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355",
    description: "Affordable 5G smartphone with solid performance",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh",
      camera: "48 MP + 2 MP + 2 MP",
      display: "6.78 inch LCD"
    }
  },
  {
    id: 24,
    name: "Tecno Phantom X2",
    brand: "Tecno",
    price: 39999,
    image: "https://images.unsplash.com/photo-1549921296-3cceaaedb3c3",
    description: "Premium Tecno phone with curved AMOLED display",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      battery: "5160 mAh",
      camera: "64 MP + 13 MP + 2 MP",
      display: "6.8 inch AMOLED"
    }
  },
  {
    id: 25,
    name: "Asus ROG Phone 7",
    brand: "Asus",
    price: 74999,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    description: "Gaming powerhouse with massive battery and cooling",
    specs: {
      ram: "16 GB",
      storage: "512 GB",
      battery: "6000 mAh",
      camera: "50 MP + 13 MP + 5 MP",
      display: "6.78 inch AMOLED"
    }
  }
];

export default mobilePhones;