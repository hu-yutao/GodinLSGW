import React from 'react';

const bubbles = Array.from({ length: 18 });

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {bubbles.map((_, i) => {
        // 随机参数
        const size = Math.random() * 32 + 24; // 24~56px
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 8; // 8~18s
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.3 + 0.15;
        const color = [
          'bg-green-200',
          'bg-gray-200',
          'bg-gray-300',
          'bg-black/10',
          'bg-green-100',
        ][Math.floor(Math.random() * 5)];
        return (
          <span
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: -size,
              opacity,
              animation: `floatUp ${duration}s linear ${delay}s infinite`,
              filter: 'blur(1.5px)',
            }}
          />
        );
      })}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
          }
          80% {
            opacity: 1;
            filter: blur(1.5px);
          }
          100% {
            transform: translateY(-110vh) scale(1.2);
            opacity: 0;
            filter: blur(3px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBackground; 