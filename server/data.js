
const data = [
  {
    "id": 0,
    "productName": "Printer",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347467_rd.jpg",
    "priceRange": [200, 600],
    "price": 0
  },
  {
    "id": 1,
    "productName": "Washer",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419622_rd.jpg;maxHeight=1000;maxWidth=1000",
    "priceRange": [600, 1000],
    "price": 0
  },
  {
    "id": 2,
    "productName": "Refridgerator",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447152_sd.jpg",
    "priceRange": [200, 2700],
    "price": 0
  },
  {
    "id": 3,
    "productName": "Dryer",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420112_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [500, 900],
    "price": 0
  },
  {
    "id": 4,
    "productName": "Freezer",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408648_rd.jpg",
    "priceRange": [180, 700],
    "price": 0
  },
  {
    "id": 5,
    "productName": "Dishwasher",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6410/6410809_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [404, 1000],
    "price": 0
  },
  {
    "id": 6,
    "productName": "Oven",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6261/6261702_rd.jpg",
    "priceRange": [1200, 3000],
    "price": 0
  },
  {
    "id": 7,
    "productName": "TV",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406899_rd.jpg",
    "priceRange": [300, 500],
    "price": 0
  },
  {
    "id": 8,
    "productName": "MacBook Air",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6200/6200722_sd.jpg",
    "priceRange": [1000, 1200],
    "price": 0
  },
  {
    "id": 9,
    "productName": "iPad",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5985/5985622cv11d.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [500, 700],
    "price": 0
  },
  {
    "id": 10,
    "productName": "PS5",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426149cv12d.jpg",
    "priceRange": [450, 500],
    "price": 0
  },
  {
    "id": 11,
    "productName": "Xbox Series S",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430277_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [250, 300],
    "price": 0
  },
  {
    "id": 12,
    "productName": "Xbox Series X",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [450, 500],
    "price": 0
  },
  {
    "id": 13,
    "productName": "Videogame",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6414/6414119_sd.jpg",
    "priceRange": [30, 70],
    "price": 0
  },
  {
    "id": 14,
    "productName": "Nintendo Switch",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364255_sa.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [200, 300],
    "price": 0
  },
  {
    "id": 15,
    "productName": "Nintendo Switch Lite",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6460/6460946_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [150, 200],
    "price": 0
  },
  {
    "id": 16,
    "productName": "Nintendo Switch Fortnite",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436771_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [10, 4000],
    "price": 0
  },
  {
    "id": 17,
    "productName": "Videogame Controller",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5748/5748618_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [50, 80],
    "price": 0
  },
  {
    "id": 18,
    "productName": "Airpods Pro",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [120, 200],
    "price": 0
  },
  {
    "id": 19,
    "productName": "Apple Watch",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215931_sd.jpg",
    "priceRange": [250, 600],
    "price": 0
  },
  {
    "id": 20,
    "productName": "iPhone 12",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009953_sd.jpg",
    "priceRange": [600, 800],
    "price": 0
  },
  {
    "id": 21,
    "productName": "Dell Laptop",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6447/6447115cv11d.jpg",
    "priceRange": [200, 600],
    "price": 0
  },
  {
    "id": 22,
    "productName": "Gaming Laptop",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6467/6467825_rd.jpg",
    "priceRange": [1500, 2500],
    "price": 0
  },
  {
    "id": 23,
    "productName": "Camera",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402248ld.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [300, 900],
    "price": 0
  },
  {
    "id": 24,
    "productName": "Digital Camera",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4866/4866804_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [100, 300],
    "price": 0
  },
  {
    "id": 25,
    "productName": "Polaroid",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6400/6400595_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [70, 150],
    "price": 0
  },
  {
    "id": 26,
    "productName": "TV Soundbar",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416849_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [200, 600],
    "price": 0
  },
  {
    "id": 27,
    "productName": "Blu-ray Player",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454111_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [50, 90],
    "price": 0
  },
  {
    "id": 28,
    "productName": "Projector",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6228/6228221_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [400, 700],
    "price": 0
  },
  {
    "id": 29,
    "productName": "Inflatable Pool",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6460/6460433cv12d.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [50, 100],
    "price": 0
  },
  {
    "id": 30,
    "productName": "Framed Pool",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6467/6467327_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [250, 1000],
    "price": 0
  },
  {
    "id": 31,
    "productName": "Car Dash Camera",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6346/6346998_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [200, 300],
    "price": 0
  },
  {
    "id": 32,
    "productName": "GPS",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6319/6319479_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [100, 200],
    "price": 0
  },
  {
    "id": 33,
    "productName": "Smart Lock",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425484_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [150, 300],
    "price": 0
  },
  {
    "id": 34,
    "productName": "Wired Headphones",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211544_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [50, 300],
    "price": 0
  },
  {
    "id": 35,
    "productName": "Movie Blu-ray",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470995_sa.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [15, 25],
    "price": 0
  },
  {
    "id": 36,
    "productName": "Vinyl Album",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5698/5698402_sa.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [15, 30],
    "price": 0
  },
  {
    "id": 37,
    "productName": "Couch",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6392/6392055_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [400, 1000],
    "price": 0
  },
  {
    "id": 38,
    "productName": "Chair",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6329/6329157_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [350, 500],
    "price": 0
  },
  {
    "id": 39,
    "productName": "VR Headset",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451978_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [200, 300],
    "price": 0
  },
  {
    "id": 40,
    "productName": "Backpack",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417750_rd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [30, 90],
    "price": 0
  },
  {
    "id": 41,
    "productName": "Luggage",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407323_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [100, 500],
    "price": 0
  },
  {
    "id": 42,
    "productName": "Hoverboard",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5879/5879305_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [200, 300],
    "price": 0
  },
  {
    "id": 43,
    "productName": "Scooter",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6377/6377571_sd.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [100, 300],
    "price": 0
  },
  {
    "id": 44,
    "productName": "Camera Drone",
    "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6442/6442031cv12d.jpg;maxHeight=640;maxWidth=550",
    "priceRange": [400, 1200],
    "price": 0
  }
];

module.exports = { data };