import Card from "./Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Programs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-content")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <div className="flex items-center justify-center mt-28 overflow-hidden">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-24 z-10">
        {items.map((item, index) => (
          <motion.div
            key={item.id || index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            className="rounded-md"
            whileTap={{ scale: 0.9 }}
          >
            <Link to={`/program${index + 1}`} key={item.id || index}>
              <Card
                imageUrl={item.imageURL}
                title={item.title}
                description={item.description}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
