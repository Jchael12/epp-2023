import "../styles/shapeStyle.css";
import About from "./About";
import { motion } from "framer-motion";

//importing images
import bgImg from "../assets/ILE.png";
import "../styles/shapeStyle.css";
import Carousel from "../contents/Carousel";

const Home = () => {
  return (
    <div className="overflow-hidden mt-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-12 w-full">
        <div className="flex flex-col break-word items-center justify-between text-center md:mt-24 mt-20 md:p-10 p-12 bg-red-700/90 md:bg-red-700/90 w-screen md:w-[600px] rounded-md border-t-2 border-amber-300">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:font-bold md:text-3xl text-3xl text-amber-300"
          >
            Earist Cavite Extension Programs of Information Technology
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block mt-10 text-justify px-2 break-word text-stone-100"
          >
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident.
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1.5,
            delay: 1,
          }}
          src={bgImg}
          className="rounded-md w-[700px] mt-24"
        />
      </div>
      {/* {divider} */}
      {/* <div className="custom-shape-divider-bottom-1698169600 hidden md:block"> */}
      {/*   <svg */}
      {/*     data-name="Layer 1" */}
      {/*     xmlns="http://www.w3.org/2000/svg" */}
      {/*     viewBox="0 0 1200 120" */}
      {/*     preserveAspectRatio="none" */}
      {/*   > */}
      {/*     <path */}
      {/*       d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" */}
      {/*       className="shape-fill" */}
      {/*     ></path> */}
      {/*   </svg> */}
      {/* </div> */}
      <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-screen md:w-1/2 lg:w-1/2 h-8/12 md:p-10 p-5 text-white text-center rounded-md mt-20 ml-4 bg-red-700/90 border-t-2 border-amber-300"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-5xl mb-3 text-amber-300"
          >
            Mission
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-xl text-justify"
          >
            Turn out vocationally, technically, technologically, and
            scientifically trained graduates who will be economically
            productive, self-sufficient, effective, responsible and discipline
            citizen of the Philippines.
          </motion.p>
        </motion.div>
        <div className="w-screen md:w-1/2 lg:w-1/2 h-8/12 mt-5 md:mr-4 p-8 text-white text-center rounded-md bg-red-700/90 border-t-2 border-amber-300">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mb-5 text-5xl text-amber-300"
          >
            Vision
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-xl text-justify"
          >
            EARIST is envisioned to be a center of excellence in trades,
            business, arts, science and technology education.
          </motion.p>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <About />
    </div>
  );
};

export default Home;
