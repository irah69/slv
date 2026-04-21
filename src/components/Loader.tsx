'use client';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(251, 146, 60, 0.6)); }
          50% { filter: drop-shadow(0 0 20px rgba(251, 146, 60, 0.9)); }
        }

        .spinner {
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

        .spinner::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          bottom: 6px;
          border-radius: 50%;
          background: black;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .spinner-text {
          position: absolute;
          bottom: 20px;
          font-size: 14px;
          color: #fbbf24;
          font-weight: 500;
          letter-spacing: 2px;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .loader-container {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="loader-container">
        <div className="spinner"></div>
      </div>

      <div className="spinner-text">Loading...</div>
    </div>
  );
}
