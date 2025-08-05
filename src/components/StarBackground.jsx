import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
        animationDuration: Math.random() * 6 + 3,
        type: Math.random() > 0.5 ? 'purple' : 'blue',
        twinkle: Math.random() > 0.7,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.8,
        x: Math.random() * 120 - 10, // Allow meteors to start slightly off-screen
        y: Math.random() * 30,
        delay: Math.random() * 20 + i * 3 + 3, // Stagger meteor appearances with 3s initial delay
        animationDuration: Math.random() * 4 + 4,
        intensity: Math.random() * 0.5 + 0.5,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${star.type === 'purple' ? 'star' : 'star-blue'} ${
            star.twinkle ? 'animate-pulse-subtle' : ''
          }`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            filter: `brightness(${0.8 + Math.random() * 0.4})`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 2.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            opacity: meteor.intensity,
            filter: `brightness(${meteor.intensity})`,
          }}
        />
      ))}
    </div>
  );
};
