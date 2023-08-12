import React, { useEffect, useRef, useState } from "react";

const IntersectionObserverComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection);
    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const containerStyle = {
    height: "auto",
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? "0" : "20px"})`,
    transition: "all 3s",
    padding: "0",
  };

  return (
    <div
      ref={targetRef}
      style={containerStyle}
      className="container-fluid d-flex align-items-center text-center "
    >
      {children}
    </div>
  );
};

export default IntersectionObserverComponent;
