import Card from "./Card";
import images from "../data/NewsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function News() {
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
    <>
      <div className="flex items-center justify-center mt-28 overflow-hidden">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-24 z-10">
          {images.map((image) => (
            <Link to={image.link} key={image.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Card
                  key={image.id}
                  imageUrl={image.imageUrl}
                  title={image.title}
                  description={image.description}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1697985040 hidden md:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default News;
