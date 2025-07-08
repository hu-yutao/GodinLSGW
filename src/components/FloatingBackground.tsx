const meteors = Array.from({ length: 5 });

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {meteors.map((_, i) => {
        // 美化参数
        const width = Math.random() * 1.2 + 1.1; // 1.1~2.3px
        const left = Math.random() * 100;
        const top = Math.random() * 80 + 5; // 5~85%
        const duration = Math.random() * 2 + 2.8; // 2.8~4.8s
        const delay = Math.random() * 4;
        const opacity = Math.random() * 0.15 + 0.18; // 0.18~0.33
        const length = Math.random() * 180 + 120; // 120~300px
        const angle = 205; // 固定为205度
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
              style={{
                width: `${width}px`,
                height: `${length}px`,
                borderRadius: `${width}px`,
                background: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)`,
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 0',
                filter: 'blur(0.5px)',
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
            transform: translateX(-300px) translateY(300px) rotate(0deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBackground; 