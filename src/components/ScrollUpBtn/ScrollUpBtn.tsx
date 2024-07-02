import { useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import { IoArrowUpSharp } from "react-icons/io5";

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "scroll-up-btn opacity-[1] visible" : " scroll-up-btn"
      }`}
      type="button"
      onClick={handleClickBtn}
    >
      <IoArrowUpSharp className="w-[30px] h-[30px]" />
    </button>
  );
};
