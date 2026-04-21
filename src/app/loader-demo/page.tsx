'use client';

export default function LoaderDemo() {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-16">Loading Animations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loader 1: Golden Gradient Spinner */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              .spinner-1 {
                width: 60px;
                height: 60px;
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
                position: relative;
              }

              .spinner-1::before {
                content: '';
                position: absolute;
                top: 4px;
                left: 4px;
                right: 4px;
                bottom: 4px;
                border-radius: 50%;
                background: #1f2937;
              }
            `}</style>
            <div className="spinner-1 mb-4"></div>
            <p className="text-amber-400 text-sm font-semibold">Golden Gradient</p>
          </div>

          {/* Loader 2: Rainbow Ring */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
            <style>{`
              @keyframes spin2 {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              .spinner-2 {
                width: 60px;
                height: 60px;
                border: 5px solid transparent;
                border-top: 5px solid #fb923c;
                border-right: 5px solid #ec4899;
                border-bottom: 5px solid #06b6d4;
                border-radius: 50%;
                animation: spin2 1.5s linear infinite;
              }
            `}</style>
            <div className="spinner-2 mb-4"></div>
            <p className="text-pink-400 text-sm font-semibold">Rainbow Ring</p>
          </div>

          {/* Loader 3: Pulsing Dots */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); opacity: 1; }
                50% { transform: translateY(-10px); opacity: 0.6; }
              }

              .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                display: inline-block;
                margin: 0 4px;
                animation: bounce 1s infinite;
              }

              .dot:nth-child(1) { animation-delay: 0s; background: #fb923c; }
              .dot:nth-child(2) { animation-delay: 0.2s; background: #fbbf24; }
              .dot:nth-child(3) { animation-delay: 0.4s; background: #fcd34d; }
            `}</style>
            <div className="mb-4">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <p className="text-yellow-400 text-sm font-semibold">Pulsing Dots</p>
          </div>

          {/* Loader 4: Double Ring */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
            <style>{`
              @keyframes spin3 {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              @keyframes spin-reverse {
                0% { transform: rotate(360deg); }
                100% { transform: rotate(0deg); }
              }

              .ring-outer {
                width: 60px;
                height: 60px;
                border: 3px solid rgba(251, 146, 60, 0.3);
                border-top: 3px solid #fb923c;
                border-radius: 50%;
                animation: spin3 2s linear infinite;
                position: relative;
              }

              .ring-inner {
                position: absolute;
                top: 6px;
                left: 6px;
                width: 48px;
                height: 48px;
                border: 3px solid rgba(251, 146, 60, 0.2);
                border-bottom: 3px solid #fbbf24;
                border-radius: 50%;
                animation: spin-reverse 1.5s linear infinite;
              }
            `}</style>
            <div className="mb-4">
              <div className="ring-outer">
                <div className="ring-inner"></div>
              </div>
            </div>
            <p className="text-orange-400 text-sm font-semibold">Double Ring</p>
          </div>

          {/* Loader 5: Rotating Bars */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
            <style>{`
              @keyframes rotate-bars {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              .bars-container {
                width: 60px;
                height: 60px;
                position: relative;
                animation: rotate-bars 2s linear infinite;
              }

              .bar {
                position: absolute;
                width: 6px;
                height: 18px;
                background: #fb923c;
                left: 27px;
                top: 6px;
                border-radius: 3px;
              }

              .bar:nth-child(1) { transform: rotate(0deg) translateY(18px); opacity: 0.3; }
              .bar:nth-child(2) { transform: rotate(45deg) translateY(18px); opacity: 0.4; }
              .bar:nth-child(3) { transform: rotate(90deg) translateY(18px); opacity: 0.5; }
              .bar:nth-child(4) { transform: rotate(135deg) translateY(18px); opacity: 0.6; }
              .bar:nth-child(5) { transform: rotate(180deg) translateY(18px); opacity: 0.7; }
              .bar:nth-child(6) { transform: rotate(225deg) translateY(18px); opacity: 0.8; }
              .bar:nth-child(7) { transform: rotate(270deg) translateY(18px); opacity: 0.9; }
              .bar:nth-child(8) { transform: rotate(315deg) translateY(18px); opacity: 1; }
            `}</style>
            <div className="mb-4">
              <div className="bars-container">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <p className="text-amber-400 text-sm font-semibold">Rotating Bars</p>
          </div>

          {/* Loader 6: Orbit Spinner */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
            <style>{`
              @keyframes orbit {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              .orbit-container {
                width: 60px;
                height: 60px;
                position: relative;
                animation: orbit 3s linear infinite;
              }

              .orbit-dot {
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #fb923c;
              }

              .orbit-dot:nth-child(1) { top: 0; left: 26px; }
              .orbit-dot:nth-child(2) { top: 6px; right: 6px; background: #fbbf24; }
              .orbit-dot:nth-child(3) { top: 26px; right: 0; background: #fcd34d; }
              .orbit-dot:nth-child(4) { bottom: 6px; right: 6px; background: #facc15; }
            `}</style>
            <div className="mb-4">
              <div className="orbit-container">
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>
              </div>
            </div>
            <p className="text-yellow-400 text-sm font-semibold">Orbit Spinner</p>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Usage</h2>
          <p className="text-gray-300 mb-4">Import the Loader component in your pages:</p>
          <pre className="bg-black p-4 rounded text-amber-400 overflow-x-auto">
{`import Loader from '@/components/Loader';

export default function Page() {
  return <Loader />;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
