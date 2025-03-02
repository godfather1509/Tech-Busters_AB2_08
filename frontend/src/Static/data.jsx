// navigation data
export const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Marketplace",
      url: "/products", // Farmers list their produce; buyers browse and purchase directly.
    },
    {
      title: "Categories",
      url: "/best-selling", // Organized view of different agricultural products.
    },
    {
      title: "Insights",
      url: "/events", // Market trends, fair pricing analysis, and AI-driven price recommendations.
    },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];

// branding data
export const brandingData = [
    {
      id: 1,
      title: "No Middlemen, Fair Prices",
      Description: "Farmers earn more, consumers pay less.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1H5.63636V24.1818H35"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M34.9982 1H11.8164V18H34.9982V1Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M11.8164 7.18164H34.9982"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "AI-Powered Price Insights",
      Description: "Get fair & competitive prices based on market trends.",
      icon: (
        <svg
          width="32"
          height="34"
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"></path>
          <path
            d="M30.7 2L29.5 10.85L20.5 9.65"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Direct Negotiation",
      Description: "Chat & negotiate prices directly with farmers.",
      icon: (
        <svg
          width="32"
          height="35"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"></path>
          <path
            d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"></path>
          <path
            d="M16 28V22"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"></path>
          <path
            d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Secure Transactions",
      Description: "Safe & reliable payments with buyer protection.",
      icon: (
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
          <path
            d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
            stroke="#FFBB38"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"></path>
        </svg>
      ),
    },
  ];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Fresh Vegetables",
    subTitle: "Organic and farm-fresh veggies",
    image_Url:
      "https://cdn.shopify.com/s/files/1/0668/7932/4458/collections/Fresh_Vegetable.jpg?v=1703309251",
  },
  {
    id: 2,
    title: "Dairy Products",
    subTitle: "Milk, Cheese, Butter, and more",
    image_Url:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg",
  },
  {
    id: 3,
    title: "Grains and Pulses",
    subTitle: "Rice, Wheat, Lentils, and more",
    image_Url:
      "https://pibindia.wordpress.com/wp-content/uploads/2016/12/istock_000020447381_medium.jpg?w=1400",
  },
  {
    id: 4,
    title: "Fruits",
    subTitle: "Seasonal and exotic fruits",
    image_Url:
      "https://howdyhealth.tamu.edu/wp-content/uploads/2023/12/5-ways-to-include-more-fruit-in-your-diet.jpg",
  },
  {
    id: 5,
    title: "Spices and Herbs",
    subTitle: "Organic and farm-sourced spices",
    image_Url:
      "https://img.freepik.com/free-photo/different-types-ground-spices-table_1150-44379.jpg",
  },
  {
    id: 6,
    title: "Handmade Products",
    subTitle: "Crafted by rural artisans",
    image_Url:
      "https://img.freepik.com/free-photo/woman-pottery-studio-making-handmade-ceramic-pot_1303-30458.jpg",
  },
  {
    id: 7,
    title: "Livestock & Poultry",
    subTitle: "Farm animals and poultry",
    image_Url: "https://www.poultryworld.net/app/uploads/2021/04/001_692_IMG_shutterstock_204241852-848x565.jpg",
  },
  {
    id: 8,
    title: "Farm Equipment",
    subTitle: "Tools, machinery, and irrigation",
    image_Url:
      "https://www.nsspl.in/wp-content/uploads/2022/08/Farming-Equipments-img-6.jpg",
  },
  {
    id: 9,
    title: "Organic Fertilizers",
    subTitle: "Natural fertilizers and compost",
    image_Url:
      "https://cdn.cdnparenting.com/articles/2021/07/16191322/380433403.webp",
  },
];

// product data
export const productData = [
  {
    id: 1,
    category: "Fresh Vegetables",
    name: "Organic and farm-fresh veggies",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "vegetables",
        url: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
      },
    ],
    shop: {
      name: "Ram Lal(verified seller)",
      shop_avatar: {
        public_id: "shop",
        url: "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2021/08/farmers-market-produce-0812211.jpg",
      },
      ratings: 4.5,
    },
    price: 50,
    discount_price: 45,
    rating: 4.6,
    total_sell: 300,
    stock: 100,
  },
  {
    id: 2,
    category: "Fresh Vegetables",
    name: "Tomato",
    description:
      "Fresh, organic tomatoes rich in vitamins A and C. Perfect for salads, sauces, and cooking.",
    image_Url: [
      {
        public_id: "tomato1",
        url: "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg",
      },
      {
        public_id: "tomato2",
        url: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg",
      },
    ],
    shop: {
      name: "Ram Lal(verifies user)",
      shop_avatar: {
        public_id: "shop1",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Vegetable_stand_in_the_market.jpg",
      },
      ratings: 4.3,
    },
    price: 40,
    discount_price: 35,
    rating: 4.5,
    total_sell: 120,
    stock: 50,
  },
  {
    id: 3,
    category: "Fresh Vegetables",
    name: "Potato",
    description:
      "High-quality, farm-fresh potatoes. Ideal for boiling, frying, and making mashed potatoes.",
    image_Url: [
      {
        public_id: "potato1",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6E3-ht6-DlMQZRwoEYT65r4unan0m8y21A&s",
      },
      {
        public_id: "potato2",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-ekzinSVXfijk8LMo-f7WuN4IIEdJLzD_A&s",
      },
    ],
    shop: {
      name: "Mahesh Kumar(verifies user)",
      shop_avatar: {
        public_id: "shop2",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Farmers_Market_Vegetables.jpg",
      },
      ratings: 4.4,
    },
    price: 30,
    discount_price: 25,
    rating: 4.2,
    total_sell: 200,
    stock: 80,
  },
  {
    id: 4,
    category: "Fresh Vegetables",
    name: "Onion",
    description:
      "Farm-fresh onions with a strong flavor, perfect for cooking and seasoning.",
    image_Url: [
      {
        public_id: "onion1",
        url: "https://chefsmandala.com/wp-content/uploads/2018/03/Onion-Red.jpg",
      },
      {
        public_id: "onion2",
        url: "https://m.media-amazon.com/images/I/51DJ-9xkuQL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
    shop: {
      name: "Ramesh Kumar(verified user)",
      shop_avatar: {
        public_id: "shop3",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Farmers_market_vegetables.jpg",
      },
      ratings: 4.5,
    },
    price: 50,
    discount_price: 45,
    rating: 4.3,
    total_sell: 150,
    stock: 60,
  },
  {
    id: 5,
    category: "Fresh Vegetables",
    name: "Carrot",
    description:
      "Sweet and crunchy farm-grown carrots, loaded with beta-carotene and vitamins.",
    image_Url: [
      {
        public_id: "carrot1",
        url: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg",
      },
      {
        public_id: "carrot2",
        url: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg",
      },
    ],
    shop: {
      name: "Lal Kaka(verified user)",
      shop_avatar: {
        public_id: "shop4",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Vegetable_market_in_Mumbai.jpg",
      },
      ratings: 4.6,
    },
    price: 60,
    discount_price: 55,
    rating: 4.7,
    total_sell: 90,
    stock: 40,
  },
  {
    id: 6,
    category: "Fresh Vegetables",
    name: "Cauliflower",
    description:
      "Fresh and organic cauliflower, great for curries, stir-fries, and healthy meals.",
    image_Url: [
      {
        public_id: "cauliflower1",
        url: "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        public_id: "cauliflower2",
        url: "https://cdn.britannica.com/24/140624-050-A8237BB9/Cauliflower-plant-form-cauliflower-cabbage-flower-structures.jpg",
      },
    ],
    shop: {
      name: "Bunty Singh",
      shop_avatar: {
        public_id: "shop5",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Farmers_market_vegetable_stall.jpg",
      },
      ratings: 4.7,
    },
    price: 45,
    discount_price: 40,
    rating: 4.6,
    total_sell: 110,
    stock: 55,
  },
  {
      id: 7,
      category: "Dairy Products",
      name: "Fresh Cow Milk (1L)",
      description:
        "Pure and fresh cow milk sourced directly from organic farms. Rich in calcium and essential nutrients, perfect for drinking, cooking, and making dairy products like curd and paneer.",
      image_Url: [
        {
          public_id: "milk_1",
          url: "https://isteam.wsimg.com/ip/a8efe83b-6857-477d-9d0f-f13ca0229a20/ols/2965_original/:/rs=w:600,h:600",
        },
        {
          public_id: "milk_2",
          url: "https://5.imimg.com/data5/ANDROID/Default/2023/9/342584012/GF/HN/KW/186472401/product-jpeg-500x500.jpg",
        },
      ],
      shop: {
        name: "Dairy Fresh",
        shop_avatar: {
          public_id: "dairy_logo3",
          url: "https://example.com/images/dairy_logo.png",
        },
        ratings: 4.7,
      },
      price: 2.99,
      discount_price: 2.49,
      rating: 4.8,
      total_sell: 200,
      stock: 50,
    },
    {
      id: 8,
      category: "Dairy Products",
      name: "Organic Farm Butter (500g)",
      description:
        "Made from pure cow milk, this organic butter is rich in flavor and free from preservatives. Ideal for spreading, cooking, and baking.",
      image_Url: [
        {
          public_id: "butter_1",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsG3OQ2-TZUR7WphTfy0X6P9Vi_JoOfnOqUQ&s",
        },
        {
          public_id: "butter_2",
          url: "https://4sfoods.co.in/wp-content/uploads/2018/05/Butter.jpg",
        },
      ],
      shop: {
        name: "Dairy Fresh",
        shop_avatar: {
          public_id: "dairy_logo2",
          url: "https://example.com/images/dairy_logo.png",
        },
        ratings: 4.7,
      },
      price: 4.99,
      discount_price: 4.49,
      rating: 4.6,
      total_sell: 180,
      stock: 40,
    },
    {
      id: 9,
      category: "Dairy Products",
      name: "Farm Fresh Paneer (250g)",
      description:
        "Soft and fresh paneer made from high-quality cow milk. Perfect for Indian dishes like paneer butter masala and palak paneer.",
      image_Url: [
        {
          public_id: "paneer_1",
          url: "https://5.imimg.com/data5/SELLER/Default/2020/8/SK/WZ/ZC/39237370/fresh-malai-paneer-500x500.jpg",
        },
        {
          public_id: "paneer_2",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1ubyOiBJFQjf-HQ4emIWp9qHSzb73mLufg&s",
        },
      ],
      shop: {
        name: "Dairy Fresh",
        shop_avatar: {
          public_id: "dairy_logo",
          url: "https://example.com/images/dairy_logo.png",
        },
        ratings: 4.7,
      },
      price: 3.99,
      discount_price: 3.49,
      rating: 4.5,
      total_sell: 160,
      stock: 35,
    },
    {
      id: 10,
      category: "Dairy Products",
      name: "Greek Yogurt (400g)",
      description:
        "Thick and creamy Greek yogurt made from premium-quality milk. A great source of protein, perfect for breakfast, smoothies, and desserts.",
      image_Url: [
        {
          public_id: "yogurt_1",
          url: "https://www.daisybeet.com/wp-content/uploads/2024/01/Homemade-Greek-Yogurt-13.jpg",
        },
        {
          public_id: "yogurt_2",
          url: "https://thegreekfoodie.com/wp-content/uploads/2021/08/How_to_make_greek_yogurt_SQ.jpg",
        },
      ],
      shop: {
        name: "Mahesh Diary(verified user)",
        shop_avatar: {
          public_id: "dairy_logo1",
          url: "https://example.com/images/dairy_logo.png",
        },
        ratings: 4.7,
      },
      price: 5.99,
      discount_price: 5.49,
      rating: 4.7,
      total_sell: 140,
      stock: 30,
    },
    {
      id: 11,
      category: "Grains and Pulses",
      name: "Organic Basmati Rice (5kg)",
      description:
        "Premium quality long-grain basmati rice with a rich aroma and fluffy texture. Ideal for biryanis, pulao, and daily meals. Sourced from organic farms.",
      image_Url: [
        {
          public_id: "basmati_rice_1",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Il9oeQ2xCyu28v9ji4fvEMa8RL5kAQcvUg&s",
        },
        {
          public_id: "basmati_rice_2",
          url: "https://www.hungrylankan.com/wp-content/uploads/2024/07/Basmati-Rice-7-768x1024.jpg",
        },
      ],
      shop: {
        name: "Grain Hub",
        shop_avatar: {
          public_id: "grain_logo",
          url: "https://example.com/images/grain_logo.png",
        },
        ratings: 4.5,
      },
      price: 12.99,
      discount_price: 11.49,
      rating: 4.6,
      total_sell: 150,
      stock: 40,
    },
    {
      id: 12,
      category: "Grains and Pulses",
      name: "Premium Chana Dal (1kg)",
      description:
        "High-quality chana dal, rich in protein and fiber. Perfect for making dal, soups, and healthy snacks.",
      image_Url: [
        {
          public_id: "chana_dal_1",
          url: "https://m.media-amazon.com/images/I/41IGHrBTE6L._AC_UF1000,1000_QL80_.jpg",
        },
        {
          public_id: "chana_dal_2",
          url: "https://m.media-amazon.com/images/I/41IGHrBTE6L._AC_UF1000,1000_QL80_.jpg",
        },
      ],
      shop: {
        name: "Grain Hub",
        shop_avatar: {
          public_id: "grain_logo",
          url: "https://example.com/images/grain_logo.png",
        },
        ratings: 4.5,
      },
      price: 3.99,
      discount_price: 3.49,
      rating: 4.4,
      total_sell: 120,
      stock: 50,
    },
    {
      id: 13,
      category: "Grains and Pulses",
      name: "Whole Wheat Flour (5kg)",
      description:
        "100% stone-ground whole wheat flour, packed with natural fiber and nutrients. Ideal for making soft rotis, chapatis, and bread.",
      image_Url: [
        {
          public_id: "wheat_flour_1",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucO0LKMoUjnblK7hb-Zba4BFcJz0E-gbhYg&s",
        },
        {
          public_id: "wheat_flour_2",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucO0LKMoUjnblK7hb-Zba4BFcJz0E-gbhYg&s",
        },
      ],
      shop: {
        name: "Grain Hub",
        shop_avatar: {
          public_id: "grain_logo",
          url: "https://example.com/images/grain_logo.png",
        },
        ratings: 4.5,
      },
      price: 8.99,
      discount_price: 7.99,
      rating: 4.5,
      total_sell: 130,
      stock: 35,
    },
    {
      id: 14,
      category: "Grains and Pulses",
      name: "Organic Moong Dal (1kg)",
      description:
        "Hygienically packed organic moong dal, rich in protein and essential nutrients. Cooks quickly and is perfect for dals, soups, and khichdi.",
      image_Url: [
        {
          public_id: "moong_dal_1",
          url: "https://www.secondrecipe.com/wp-content/uploads/2022/01/air-fried-moong-dal.jpg",
        },
        {
          public_id: "moong_dal_2",
          url: "https://www.secondrecipe.com/wp-content/uploads/2022/01/air-fried-moong-dal.jpg",
        },
      ],
      shop: {
        name: "Grain Hub",
        shop_avatar: {
          public_id: "grain_logo",
          url: "https://example.com/images/grain_logo.png",
        },
        ratings: 4.5,
      },
      price: 4.99,
      discount_price: 4.49,
      rating: 4.6,
      total_sell: 110,
      stock: 45,
    },
    {
      id: 15,
      category: "Fruits",
      name: "Fresh Alphonso Mango (1kg)",
      description:
        "Sweet and juicy Alphonso mangoes, handpicked from organic farms. Perfect for juices, desserts, and direct consumption.",
      image_Url: [
        {
          public_id: "alphonso_mango_1",
          url: "https://exoticflora.in/cdn/shop/products/alphonsomango.jpg?v=1612358490",
        },
        {
          public_id: "alphonso_mango_2",
          url: "https://exoticflora.in/cdn/shop/products/alphonsomango.jpg?v=1612358490",
        },
      ],
      shop: {
        name: "Fruit Basket",
        shop_avatar: {
          public_id: "fruit_logo",
          url: "https://example.com/images/fruit_logo.png",
        },
        ratings: 4.7,
      },
      price: 9.99,
      discount_price: 8.99,
      rating: 4.8,
      total_sell: 200,
      stock: 50,
    },
    {
      id: 16,
      category: "Fruits",
      name: "Seedless Watermelon (2kg)",
      description:
        "Refreshing, naturally sweet, and seedless watermelon. High in hydration and perfect for summer days.",
      image_Url: [
        {
          public_id: "watermelon_1",
          url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
        },
        {
          public_id: "watermelon_2",
          url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
        },
      ],
      shop: {
        name: "Fruit Basket",
        shop_avatar: {
          public_id: "fruit_logo",
          url: "https://example.com/images/fruit_logo.png",
        },
        ratings: 4.7,
      },
      price: 6.99,
      discount_price: 5.99,
      rating: 4.6,
      total_sell: 180,
      stock: 40,
    },
    {
      id: 17,
      category: "Fruits",
      name: "Organic Red Apples (1kg)",
      description:
        "Crisp, fresh, and organic red apples, rich in fiber and antioxidants. Ideal for snacking and salads.",
      image_Url: [
        {
          public_id: "red_apple_1",
          url: "https://www.fruits365.shop/cdn/shop/products/applewashington_c94873f1-c544-4a4c-ac19-373685b759d1.jpg?v=1635747075",
        },
        {
          public_id: "red_apple_2",
          url: "https://www.fruits365.shop/cdn/shop/products/applewashington_c94873f1-c544-4a4c-ac19-373685b759d1.jpg?v=1635747075",
        },
      ],
      shop: {
        name: "Fruit Basket",
        shop_avatar: {
          public_id: "fruit_logo",
          url: "https://example.com/images/fruit_logo.png",
        },
        ratings: 4.7,
      },
      price: 7.99,
      discount_price: 6.99,
      rating: 4.7,
      total_sell: 160,
      stock: 35,
    },
    {
      id: 18,
      category: "Fruits",
      name: "Banana (Cavendish) (1 Dozen)",
      description:
        "Naturally sweet and energy-boosting Cavendish bananas. Great for smoothies, snacks, and baking.",
      image_Url: [
        {
          public_id: "banana_1",
          url: "https://www.bigbasket.com/media/uploads/p/xxl/40129358_1-fresho-banana-robusta.jpg",
        },
        {
          public_id: "banana_2",
          url: "https://www.bigbasket.com/media/uploads/p/xxl/40129358_1-fresho-banana-robusta.jpg",
        },
      ],
      shop: {
        name: "Fruit Basket",
        shop_avatar: {
          public_id: "fruit_logo",
          url: "https://example.com/images/fruit_logo.png",
        },
        ratings: 4.7,
      },
      price: 3.49,
      discount_price: 2.99,
      rating: 4.8,
      total_sell: 220,
      stock: 60,
    },
    {
      id: 19,
      category: "Spices and Herbs",
      name: "Organic Turmeric Powder (250g)",
      description:
        "Pure and organic turmeric powder with high curcumin content. Ideal for cooking, medicinal use, and skincare.",
      image_Url: [
        {
          public_id: "turmeric_powder_1",
          url: "https://m.media-amazon.com/images/I/71fLAO90ctL.jpg",
        },
        {
          public_id: "turmeric_powder_2",
          url: "https://m.media-amazon.com/images/I/71fLAO90ctL.jpg",
        },
      ],
      shop: {
        name: "Spice Mart",
        shop_avatar: {
          public_id: "spice_logo",
          url: "https://example.com/images/spice_logo.png",
        },
        ratings: 4.6,
      },
      price: 4.99,
      discount_price: 4.49,
      rating: 4.7,
      total_sell: 150,
      stock: 40,
    },
    {
      id: 20,
      category: "Spices and Herbs",
      name: "Whole Black Pepper (200g)",
      description:
        "Premium quality whole black pepper, hand-picked and sun-dried to retain its rich aroma and spiciness.",
      image_Url: [
        {
          public_id: "black_pepper_1",
          url: "https://rukminim2.flixcart.com/image/850/1000/koudfgw0/spice-masala/r/o/a/premium-organic-black-pepper-whole-pouch-sushit-spices-seeds-original-imag37hdzn4yetcr.jpeg?q=90&crop=false",
        },
        {
          public_id: "black_pepper_2",
          url: "https://rukminim2.flixcart.com/image/850/1000/koudfgw0/spice-masala/r/o/a/premium-organic-black-pepper-whole-pouch-sushit-spices-seeds-original-imag37hdzn4yetcr.jpeg?q=90&crop=false",
        },
      ],
      shop: {
        name: "Spice Mart",
        shop_avatar: {
          public_id: "spice_logo",
          url: "https://example.com/images/spice_logo.png",
        },
        ratings: 4.6,
      },
      price: 5.99,
      discount_price: 5.49,
      rating: 4.8,
      total_sell: 130,
      stock: 35,
    },
    {
      id: 21,
      category: "Spices and Herbs",
      name: "Cinnamon Sticks (100g)",
      description:
        "Aromatic cinnamon sticks sourced from organic farms. Great for cooking, tea, and herbal remedies.",
      image_Url: [
        {
          public_id: "cinnamon_sticks_1",
          url: "https://img.clevup.in/25743/1641879923638_SKU-0218_0.jpg?width=600",
        },
        {
          public_id: "cinnamon_sticks_2",
          url: "https://img.clevup.in/25743/1641879923638_SKU-0218_0.jpg?width=600",
        },
      ],
      shop: {
        name: "Spice Mart",
        shop_avatar: {
          public_id: "spice_logo",
          url: "https://example.com/images/spice_logo.png",
        },
        ratings: 4.6,
      },
      price: 3.99,
      discount_price: 3.49,
      rating: 4.7,
      total_sell: 140,
      stock: 45,
    },
    {
      id: 22,
      category: "Spices and Herbs",
      name: "Dried Oregano (50g)",
      description:
        "Sun-dried oregano leaves with a strong and refreshing flavor. Perfect for Italian, Mediterranean, and Mexican cuisines.",
      image_Url: [
        {
          public_id: "oregano_1",
          url: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/oregano-flakes-spoon-thumb.jpg",
        },
        {
          public_id: "oregano_2",
          url: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/oregano-flakes-spoon-thumb.jpg",
        },
      ],
      shop: {
        name: "Spice Mart",
        shop_avatar: {
          public_id: "spice_logo",
          url: "https://example.com/images/spice_logo.png",
        },
        ratings: 4.6,
      },
      price: 2.99,
      discount_price: 2.49,
      rating: 4.6,
      total_sell: 120,
      stock: 50,
    },
    {
      id: 23,
      category: "Handmade Products",
      name: "Handwoven Cotton Table Runner",
      description:
        "A beautifully handwoven cotton table runner crafted by rural artisans. Perfect for adding an ethnic touch to your dining space.",
      image_Url: [
        {
          public_id: "table_runner_1",
          url: "https://m.media-amazon.com/images/I/712LTsbUF5L.jpg",
        },
        {
          public_id: "table_runner_2",
          url: "https://m.media-amazon.com/images/I/71f40mwSJ0L._AC_UF894,1000_QL80_.jpg",
        },
      ],
      shop: {
        name: "Artisan Creations",
        shop_avatar: {
          public_id: "artisan_logo",
          url: "https://example.com/images/artisan_logo.png",
        },
        ratings: 4.8,
      },
      price: 19.99,
      discount_price: 17.99,
      rating: 4.7,
      total_sell: 85,
      stock: 20,
    },
    {
      id: 24,
      category: "Handmade Products",
      name: "Terracotta Clay Tea Set",
      description:
        "A handcrafted terracotta clay tea set, made by skilled artisans. Ideal for a natural and traditional tea experience.",
      image_Url: [
        {
          public_id: "clay_tea_set_1",
          url: "https://www.zupppy.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-01-at-7.35.05-PM.jpeg",
        },
        {
          public_id: "clay_tea_set_2",
          url: "https://www.zupppy.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-01-at-7.35.05-PM.jpeg",
        },
      ],
      shop: {
        name: "Artisan Creations",
        shop_avatar: {
          public_id: "artisan_logo",
          url: "https://example.com/images/artisan_logo.png",
        },
        ratings: 4.8,
      },
      price: 24.99,
      discount_price: 22.49,
      rating: 4.8,
      total_sell: 75,
      stock: 15,
    },
    {
      id: 25,
      category: "Handmade Products",
      name: "Hand Carved Wooden Jewelry Box",
      description:
        "A stunning hand-carved wooden jewelry box, designed by rural artisans. Perfect for storing precious items with a vintage touch.",
      image_Url: [
        {
          public_id: "wooden_jewelry_box_1",
          url: "https://m.media-amazon.com/images/I/8143mPNIYyL.jpg",
        },
        {
          public_id: "wooden_jewelry_box_2",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7vwb8ZZGQqnVfuSQYof7S2f6Paarc6hxzxz4zI4XRl5Sj-qZko40b8V8S-zDmCKGlHk&usqp=CAU",
        },
      ],
      shop: {
        name: "Artisan Creations",
        shop_avatar: {
          public_id: "artisan_logo",
          url: "https://example.com/images/artisan_logo.png",
        },
        ratings: 4.8,
      },
      price: 29.99,
      discount_price: 27.49,
      rating: 4.9,
      total_sell: 60,
      stock: 10,
    },
    {
      id: 26,
      category: "Handmade Products",
      name: "Eco Friendly Jute Tote Bag",
      description:
        "A durable, eco-friendly jute tote bag, handcrafted by local artisans. Perfect for daily use and reducing plastic waste.",
      image_Url: [
        {
          public_id: "jute_tote_bag_1",
          url: "https://static.wixstatic.com/media/467f6b_8c58cbda487248849d4d965e965f2851~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/467f6b_8c58cbda487248849d4d965e965f2851~mv2.jpg",
        },
        {
          public_id: "jute_tote_bag_2",
          url: "https://static.wixstatic.com/media/467f6b_8c58cbda487248849d4d965e965f2851~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/467f6b_8c58cbda487248849d4d965e965f2851~mv2.jpg",
        },
      ],
      shop: {
        name: "Artisan Creations",
        shop_avatar: {
          public_id: "artisan_logo",
          url: "https://example.com/images/artisan_logo.png",
        },
        ratings: 4.8,
      },
      price: 14.99,
      discount_price: 12.99,
      rating: 4.7,
      total_sell: 90,
      stock: 30,
    },
    {
      id: 27,
      category: "Livestock and Poultry",
      name: "Desi Country Chicken (Live)",
      description:
        "Purebred Desi country chicken, raised on organic feed. Known for its rich flavor and high nutritional value.",
      image_Url: [
        {
          public_id: "desi_chicken_1",
          url: "https://example.com/images/desi_chicken1.jpg",
        },
        {
          public_id: "desi_chicken_2",
          url: "https://example.com/images/desi_chicken2.jpg",
        },
      ],
      shop: {
        name: "Farm Fresh Livestock",
        shop_avatar: {
          public_id: "farm_logo",
          url: "https://example.com/images/farm_logo.png",
        },
        ratings: 4.6,
      },
      price: 15.99,
      discount_price: 13.99,
      rating: 4.7,
      total_sell: 120,
      stock: 50,
    },
    {
      id: 28,
      category: "Livestock and Poultry",
      name: "White Leghorn Egg-Laying Hens",
      description:
        "Healthy White Leghorn hens, known for high egg production. Ideal for small farms and backyard poultry farming.",
      image_Url: [
        {
          public_id: "white_leghorn_1",
          url: "https://example.com/images/white_leghorn1.jpg",
        },
        {
          public_id: "white_leghorn_2",
          url: "https://example.com/images/white_leghorn2.jpg",
        },
      ],
      shop: {
        name: "Farm Fresh Livestock",
        shop_avatar: {
          public_id: "farm_logo",
          url: "https://example.com/images/farm_logo.png",
        },
        ratings: 4.6,
      },
      price: 12.99,
      discount_price: 10.99,
      rating: 4.5,
      total_sell: 85,
      stock: 40,
    },
    {
      id: 29,
      category: "Livestock and Poultry",
      name: "Grass-Fed Dairy Cow (Jersey Breed)",
      description:
        "Healthy Jersey dairy cow, known for high milk yield with rich nutritional content. Raised on a grass-fed diet.",
      image_Url: [
        {
          public_id: "jersey_cow_1",
          url: "https://example.com/images/jersey_cow1.jpg",
        },
        {
          public_id: "jersey_cow_2",
          url: "https://example.com/images/jersey_cow2.jpg",
        },
      ],
      shop: {
        name: "Farm Fresh Livestock",
        shop_avatar: {
          public_id: "farm_logo",
          url: "https://example.com/images/farm_logo.png",
        },
        ratings: 4.6,
      },
      price: 899.99,
      discount_price: 849.99,
      rating: 4.8,
      total_sell: 20,
      stock: 5,
    },
    {
      id: 30,
      category: "Livestock and Poultry",
      name: "Goat (Boer Breed for Meat)",
      description:
        "Strong and healthy Boer goat, known for its high meat yield and excellent adaptability to various climates.",
      image_Url: [
        {
          public_id: "boer_goat_1",
          url: "https://example.com/images/boer_goat1.jpg",
        },
        {
          public_id: "boer_goat_2",
          url: "https://example.com/images/boer_goat2.jpg",
        },
      ],
      shop: {
        name: "Farm Fresh Livestock",
        shop_avatar: {
          public_id: "farm_logo",
          url: "https://example.com/images/farm_logo.png",
        },
        ratings: 4.6,
      },
      price: 199.99,
      discount_price: 179.99,
      rating: 4.7,
      total_sell: 45,
      stock: 15,
    },
    {
      id: 31,
      category: "Farm Equipment",
      name: "Handheld Garden Hoe (Durable Steel)",
      description:
        "A high-quality, rust-resistant steel hoe with a comfortable grip, perfect for weeding and soil loosening.",
      image_Url: [
        {
          public_id: "garden_hoe_1",
          url: "https://m.media-amazon.com/images/I/816oBNFDAdL._AC_UF894,1000_QL80_.jpg",
        },
        {
          public_id: "garden_hoe_2",
          url: "https://m.media-amazon.com/images/I/81Jlt-zlg4L.jpg",
        },
      ],
      shop: {
        name: "AgroTools",
        shop_avatar: {
          public_id: "agrotools_logo",
          url: "https://example.com/images/agrotools_logo.png",
        },
        ratings: 4.5,
      },
      price: 15.99,
      discount_price: 13.49,
      rating: 4.6,
      total_sell: 200,
      stock: 150,
    },
    {
      id: 32,
      category: "Farm Equipment",
      name: "Drip Irrigation Kit (Water Saving System)",
      description:
        "Complete drip irrigation kit with adjustable drippers, pipes, and connectors. Saves water and enhances plant growth.",
      image_Url: [
        {
          public_id: "drip_irrigation_1",
          url: "https://rukminim2.flixcart.com/image/850/1000/k59xci80/drip-irrigation-kit/h/r/m/automatic-drip-irrigation-system-for-watering-plants-and-garden-original-imafzy68asmggr2p.jpeg?q=90&crop=false",
        },
        {
          public_id: "drip_irrigation_2",
          url: "https://rukminim2.flixcart.com/image/850/1000/k59xci80/drip-irrigation-kit/h/r/m/automatic-drip-irrigation-system-for-watering-plants-and-garden-original-imafzy68asmggr2p.jpeg?q=90&crop=false",
        },
      ],
      shop: {
        name: "AgroTools",
        shop_avatar: {
          public_id: "agrotools_logo",
          url: "https://example.com/images/agrotools_logo.png",
        },
        ratings: 4.5,
      },
      price: 49.99,
      discount_price: 44.99,
      rating: 4.7,
      total_sell: 120,
      stock: 90,
    },
    {
      id: 33,
      category: "Farm Equipment",
      name: "Electric Sprayer Pump  (16L Capacity)",
      description:
        "Battery-operated sprayer pump with adjustable nozzle, ideal for pesticides, herbicides, and fertilizers.",
      image_Url: [
        {
          public_id: "sprayer_pump_1",
          url: "https://adarshplant.com/wp-content/uploads/2020/10/1-9.jpg",
        },
        {
          public_id: "sprayer_pump_2",
          url: "https://adarshplant.com/wp-content/uploads/2020/10/1-9.jpg",
        },
      ],
      shop: {
        name: "AgroTools",
        shop_avatar: {
          public_id: "agrotools_logo",
          url: "https://example.com/images/agrotools_logo.png",
        },
        ratings: 4.5,
      },
      price: 89.99,
      discount_price: 79.99,
      rating: 4.8,
      total_sell: 85,
      stock: 60,
    },
    {
      id: 34,
      category: "Farm Equipment",
      name: "Mini Power Tiller (2.5 HP Engine)",
      description:
        "Compact and powerful tiller designed for small farms and home gardens. Easy to operate and fuel-efficient.",
      image_Url: [
        {
          public_id: "power_tiller_1",
          url: "https://mlhobevaucyf.i.optimole.com/w:auto/h:auto/q:mauto/f:best/ig:avif/https://newagri.in/wp-content/uploads/2022/05/AG147_Mini_weeder_1.jpg",
        },
        {
          public_id: "power_tiller_2",
          url: "https://mlhobevaucyf.i.optimole.com/w:auto/h:auto/q:mauto/f:best/ig:avif/https://newagri.in/wp-content/uploads/2022/05/AG147_Mini_weeder_1.jpg",
        },
      ],
      shop: {
        name: "AgroTools",
        shop_avatar: {
          public_id: "agrotools_logo",
          url: "https://example.com/images/agrotools_logo.png",
        },
        ratings: 4.5,
      },
      price: 299.99,
      discount_price: 279.99,
      rating: 4.9,
      total_sell: 45,
      stock: 30,
    },
    {
      id: 35,
      category: "Organic Fertilizers",
      name: "Vermicompost, Nutrient-Rich Organic Manure (5kg)",
      description:
        "High-quality vermicompost made from earthworm-processed organic waste. Enhances soil fertility and plant growth.",
      image_Url: [
        {
          public_id: "vermicompost_1",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVabiY5BT0YmW45bUDfiIpk3n2wSFeO9py0w&s",
        },
        {
          public_id: "vermicompost_2",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVabiY5BT0YmW45bUDfiIpk3n2wSFeO9py0w&s",
        },
      ],
      shop: {
        name: "GreenHarvest",
        shop_avatar: {
          public_id: "greenharvest_logo",
          url: "https://example.com/images/greenharvest_logo.png",
        },
        ratings: 4.6,
      },
      price: 12.99,
      discount_price: 10.99,
      rating: 4.7,
      total_sell: 150,
      stock: 100,
    },
    {
      id: 36,
      category: "Organic Fertilizers",
      name: "Cow Dung Compost 100% Natural (10kg)",
      description:
        "Pure, aged cow dung compost, rich in essential nutrients. Improves soil structure and provides slow-release nutrients.",
      image_Url: [
        {
          public_id: "cow_dung_1",
          url: "https://www.homebiogas.com/wp-content/uploads/2023/09/shutterstock_1784566982-1-scaled.jpg",
        },
        {
          public_id: "cow_dung_2",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvL2QNXhg7elX6hZliQvgd_9dpsxjSRR7VQ&s",
        },
      ],
      shop: {
        name: "GreenHarvest",
        shop_avatar: {
          public_id: "greenharvest_logo",
          url: "https://example.com/images/greenharvest_logo.png",
        },
        ratings: 4.6,
      },
      price: 8.99,
      discount_price: 7.49,
      rating: 4.5,
      total_sell: 200,
      stock: 120,
    },
    {
      id: 37,
      category: "Organic Fertilizers",
      name: "Neem Cake Fertilizer, Natural Pest Repellent (2kg)",
      description:
        "Organic neem cake fertilizer acts as a natural pesticide while enriching the soil with nutrients.",
      image_Url: [
        {
          public_id: "neem_cake_1",
          url: "https://m.media-amazon.com/images/I/511w4zIhPpL.jpg",
        },
        {
          public_id: "neem_cake_2",
          url: "https://m.media-amazon.com/images/I/511w4zIhPpL.jpg",
        },
      ],
      shop: {
        name: "GreenHarvest",
        shop_avatar: {
          public_id: "greenharvest_logo",
          url: "https://example.com/images/greenharvest_logo.png",
        },
        ratings: 4.6,
      },
      price: 14.99,
      discount_price: 12.99,
      rating: 4.6,
      total_sell: 120,
      stock: 80,
    },
    {
      id: 38,
      category: "Organic Fertilizers",
      name: "Bone Meal Fertilizer, Phosphorus-Rich Soil Booster (5kg)",
      description:
        "Bone meal is a great source of phosphorus and calcium, promoting root development and flowering in plants.",
      image_Url: [
        {
          public_id: "bone_meal_1",
          url: "https://radhakrishnaagriculture.in/cdn/shop/files/boneMeal.jpg?v=1711435429",
        },
        {
          public_id: "bone_meal_2",
          url: "https://radhakrishnaagriculture.in/cdn/shop/files/boneMeal.jpg?v=1711435429",
        },
      ],
      shop: {
        name: "GreenHarvest",
        shop_avatar: {
          public_id: "greenharvest_logo",
          url: "https://example.com/images/greenharvest_logo.png",
        },
        ratings: 4.6,
      },
      price: 16.99,
      discount_price: 14.49,
      rating: 4.7,
      total_sell: 90,
      stock: 60,
    },
];

export const footerProductLinks = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "How It Works",
    link: "/how-it-works",
  },
  {
    name: "Farmer Support",
    link: "/farmer-support",
  },
  {
    name: "Marketplace Policies",
    link: "/policies",
  },
  {
    name: "Customer Reviews",
    link: "/reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "Fresh Produce",
    link: "/products?category=Vegetables%20and%20Fruits",
  },
  {
    name: "Dairy & Poultry",
    link: "/products?category=Dairy%20Products",
  },
  {
    name: "Grains & Pulses",
    link: "/products?category=Grains%20and%20Pulses",
  },
  {
    name: "Farm Equipment",
    link: "/products?category=Farm%20Equipment",
  },
  {
    name: "Community Events",
    link: "/events",
  },
];


export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Farmer & Consumer Reviews",
  },
  {
    name: "Contact Support",
  },
  {
    name: "Delivery & Logistics",
  },
  {
    name: "Live Chat Assistance",
  },
];
