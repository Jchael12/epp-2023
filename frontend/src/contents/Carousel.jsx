import { useEffect, useState } from "react";
import CarouselContens from "./CarouselContens";

const Carousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-content")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <CarouselContens items={items} headline="This is a carousel" />
    </div>
  );
};

export default Carousel;
