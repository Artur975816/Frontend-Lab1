import React from "react";
import "./Loader.css"; 

const Loader = () => {
  return (
    <div className="loader-container">
      <svg viewBox="0 0 100 50" className="infinity">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff00ff">
              <animate attributeName="stop-color" values="#ff00ff; #00ffff; #ff00ff" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00ffff">
              <animate attributeName="stop-color" values="#00ffff; #ff00ff; #00ffff" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M10,25 Q30,-10 50,25 Q70,60 90,25"
          stroke="url(#gradient)"
          strokeWidth="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
