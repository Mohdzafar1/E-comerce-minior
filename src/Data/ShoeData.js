import img1 from "../Images/Shoe1.png"
import img2 from "../Images/shoe2.png"
import img3 from "../Images/shoe3.png"
import img4 from "../Images/shoe4.png"
import img5 from "../Images/shoe5.png"
import img6 from "../Images/shoe6.png"
import img7 from "../Images/shoe7.png"
import img8 from "../Images/shoe8.png"
import img9 from "../Images/shoe9.png"
import img10 from "../Images/shoe10.png"
import img11 from "../Images/shoe11.png"
import img12 from "../Images/shoe12.png"
// import img13 from "../Images/Shoe13.png"
// import img14 from "../Images/Shoe14.png"
// import img15 from "../Images/Shoe15.png"
// import img16 from "../Images/Shoe16.png"
// import img17 from "../Images/Shoe17.png"
// import img18 from "../Images/Shoe18.png"




const shoeData=
[
  {
    "id": "thapaserialnoa",
    "name": "iphone x",
    "company": "apple",
    "price": 6000000,
    "colors": [
      "#ff0000",
      "#000000",
      "#CDD0D0"
    ],
    "image":img1 ,
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "mobile",
    "featured": true
  },
  {
    "id": "thapaserialnob",
    "name": "samsung s20",
    "company": "samsung",
    "price": 5000000,
    "colors": [
      "#000",
      "#22D3EF"
    ],
    "image": img2,
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "mobile",
    "shipping": true
  },
  {
    "id": "thapaserialnoc",
    "name": "Dell Series",
    "company": "dell",
    "price": 600000,
    "colors": [
      "#22D3EF",
      "#CDD0D0"
    ],
    "image": img3,
    "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop"
  },
  {
    "id": "thapaserialnod",
    "name": "Nokia 420",
    "company": "nokia",
    "price": 12599,
    "colors": [
      "#000",
      "#000000",
      "#CDD0D0"
    ],
    "image": img4,
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "mobile",
    "shipping": true
  },
  {
    "id": "thapaserialnoe",
    "name": "Mac Pc",
    "company": "apple",
    "price": 4000099,
    "colors": [
      "#000",
      "#CDD0D0"
    ],
    "image": img5,
    "description": "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "computer",
    "shipping": true
  },
  {
    "id": "thapaserialnof",
    "name": "Macbook Pro",
    "company": "apple",
    "price": 42999,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": img6,
    "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop",
    "shipping": true
  },
  {
    "id": "thapaserialnog",
    "name": "Asus gseries",
    "company": "asus",
    "price": 23999,
    "colors": [
      "#CDD0D0",
      "#000"
    ],
    "image": img7,
    "description": "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "laptop",
    "shipping": true
  },
  {
    "id": "thapaserialnoh",
    "name": "Accessories",
    "price": 1099999,
    "company": "lenova",
    "colors": [
      "#000",
      "#CDD0D0"
    ],
    "image": img8,
    "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "accessories",
    "featured": true,
    "shipping": true
  },
  {
    "id": "thapaserialnoi",
    "name": "Iwatch",
    "price": 39999,
    "company": "apple",
    "colors": [
      "#000000"
    ],
    "image": img9,
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "watch",
    "shipping": true
  },
  {
    "id": "thapaserialnoj",
    "name": "user need",
    "company": "apple",
    "price": 300099,
    "colors": [
      "#ff0000",
      "#22D3EF",
      "#000000"
    ],
    "image": img10,
    "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "accessories"
  },
  {
    "id": "thapaserialnok",
    "name": "rolex premium",
    "company": "rolex",
    "price": 999999,
    "colors": [
      "#000000",
      "#CDD0D0"
    ],
    "image": img11,
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "watch"
  },
  {
    "id": "thapaserialnol",
    "name": "galaxy w20",
    "price": 311999,
    "company": "samsung",
    "colors": [
      "#22D3EF",
      "#ff0000",
      "#000000"
    ],
    "image": img12,
    "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    "category": "watch",
    "featured": true
  }
]
export default shoeData;