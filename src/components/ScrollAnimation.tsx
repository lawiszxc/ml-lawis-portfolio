import { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const scrollSpeed = 0.5;
      const delta = e.deltaY * scrollSpeed;

      window.scrollBy({
        top: delta,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
