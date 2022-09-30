import { useEffect, useRef } from "react";

const useScroller = (childRef, callback) => {
  const observer = useRef();

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0 };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback();
      }
    }, options);

    observer.current.observe(childRef.current);

    return () => {
      observer.current.unobserve(childRef.current);
    };
  }, [childRef, callback]);
}

export default useScroller;