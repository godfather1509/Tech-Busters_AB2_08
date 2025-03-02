import styles from "../../Styles/Style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventCard = () => {
  const gardeningTips = [
    {
      title: "Grow Your Own Veggies at Home!",
      description:
        "Start small with easy-to-grow veggies like tomatoes, lettuce, or herbs like basil and mint. Use containers, ensure sunlight, and water wisely!",
      image:
        "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      author: "Rahul Sharma",
    },
    {
      title: "Make Homemade Manure from Kitchen Waste",
      description:
        "Turn kitchen waste into nutrient-rich manure. Collect fruit peels, veggie scraps, and eggshells, and follow simple composting steps!",
      image:
        "https://cdn.shopify.com/s/files/1/0569/9675/7697/files/what-is-plant-fertilizer-made-of_1024x1024.jpg?v=1655088556",
      author: "Priya Patel",
    },
    {
      title: "Organic Pest Control",
      description:
        "Use natural methods like neem oil spray, garlic spray, or plant marigolds to keep pests away without chemicals.",
      image:
        "https://heropestcontrol.com/wp-content/uploads/2022/08/g4de1ea3dd06c0c4628714cbd7b1ea159694b6fa486e6f6bb1810cd6b07bbee8fb379727691e6ce0a793a4d11df51b506-2466570.jpg",
      author: "Amit Singh",
    },
    {
      title: "DIY Organic Fertilizers 🌿",
      description:
        "Make your own fertilizers using banana peel tea, eggshell powder, or Epsom salt solution for healthier plants.",
      image:
        "https://cdn.cdnparenting.com/articles/2021/07/16191322/380433403.webp",
      author: "Neha Gupta",
    },
    {
      title: "Vertical Gardening",
      description:
        "Short on space? Use trellises, hanging planters, or wall planters to grow climbing plants like beans and herbs.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301348021/KV/VK/ZU/69408943/vertical-garden-bio-felt-outdoor-wall-garden.jpg",
      author: "Vikram Mehta",
    },
    {
      title: "Save Seeds for Next Season",
      description:
        "Dry and store seeds properly for future planting. Test germination before using them!",
      image:
        "https://images.unsplash.com/photo-1586943101559-4cdcf86a6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80",
      author: "Anjali Desai",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gardeningTips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={tip.image}
            alt={tip.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-[20px] font-[600] text-[#2C5F34]">
              {tip.title}
            </h3>
            <p className="mt-2 text-[#3d3a3a]">{tip.description}</p>
            <div className="mt-4 text-[#3d3a3a] text-sm">
              <span className="font-medium">Author:</span> {tip.author}
            </div>
            <Link
              to={`/organic-gardening-tips`}
              className={`${styles.button} bg-[#2C5F34] hover:bg-[#24522a] text-white font-semibold mt-4 inline-block`}>
              Learn More
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventCard;