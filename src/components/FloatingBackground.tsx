const meteors = Array.from({ length: 25 });

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {meteors.map((_, i) => {
        // 随机参数
        const size = Math.random() * 3 + 1; // 1~4px
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 3 + 2; // 2~5s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.6 + 0.3;
        const length = Math.random() * 100 + 50; // 50~150px
        const angle = Math.random() * 30 + 15; // 15~45度
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity,
              animation: `meteor ${duration}s linear ${delay}s infinite`,
            }}
          >
            <div
              className="bg-black"
              style={{
                width: size,
                height: length,
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 0',
                boxShadow: `0 0 ${size * 2}px ${size}px rgba(0, 0, 0, 0.3)`,
              }}
            />
          </div>
        );
      })}
      <style>{`
        @keyframes meteor {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(-200px) translateY(200px) rotate(0deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBackground; 