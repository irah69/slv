'use client';

export function GoldenSpinner() {
  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .golden-spinner {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #fb923c 0deg,
            #fbbf24 90deg,
            #fcd34d 180deg,
            #facc15 270deg,
            #fb923c 360deg
          );
          animation: spin 3s linear infinite;
          filter: drop-shadow(0 0 15px rgba(251, 146, 60, 0.7));
          position: relative;
        }

        .golden-spinner::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          bottom: 6px;
          border-radius: 50%;
          background: black;
        }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="golden-spinner"></div>
      </div>
    </>
  );
}

export function RainbowRingLoader() {
  return (
    <>
      <style>{`
        @keyframes spin-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .rainbow-ring {
          width: 80px;
          height: 80px;
          border: 6px solid transparent;
          border-top: 6px solid #fb923c;
          border-right: 6px solid #ec4899;
          border-bottom: 6px solid #06b6d4;
          border-radius: 50%;
          animation: spin-ring 2s linear infinite;
        }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="rainbow-ring"></div>
      </div>
    </>
  );
}

export function PulsingDotsLoader() {
  return (
    <>
      <style>{`
        @keyframes dot-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-15px); opacity: 0.5; }
        }

        .pulsing-dots {
          display: flex;
          gap: 8px;
          justifyContent: center;
        }

        .pulsing-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          animation: dot-bounce 1s infinite;
        }

        .pulsing-dot:nth-child(1) { animation-delay: 0s; background: #fb923c; }
        .pulsing-dot:nth-child(2) { animation-delay: 0.2s; background: #fbbf24; }
        .pulsing-dot:nth-child(3) { animation-delay: 0.4s; background: #fcd34d; }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="pulsing-dots">
          <div className="pulsing-dot"></div>
          <div className="pulsing-dot"></div>
          <div className="pulsing-dot"></div>
        </div>
      </div>
    </>
  );
}

export function DoubleRingLoader() {
  return (
    <>
      <style>{`
        @keyframes spin-outer {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin-inner {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        .double-ring-outer {
          width: 80px;
          height: 80px;
          border: 4px solid rgba(251, 146, 60, 0.2);
          border-top: 4px solid #fb923c;
          border-radius: 50%;
          animation: spin-outer 2s linear infinite;
          position: relative;
        }

        .double-ring-inner {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 64px;
          height: 64px;
          border: 4px solid rgba(251, 146, 60, 0.15);
          border-bottom: 4px solid #fbbf24;
          border-radius: 50%;
          animation: spin-inner 1.5s linear infinite;
        }
      `}</style>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="double-ring-outer">
          <div className="double-ring-inner"></div>
        </div>
      </div>
    </>
  );
}
