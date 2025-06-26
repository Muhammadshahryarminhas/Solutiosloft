import { useState } from 'react';
import calendarIcon from '../Assets/calendar-lines.svg';
import googleMeetIcon from '../Assets//logos_google-meet.svg';
import zoomIcon from '../Assets/streamline-logos_zoom-logo-1-block.svg';

// Add custom style for morphing circle
const morphingCircleStyle = `
  .morphing-circle {
    transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
    left: 80%;
    transform: translateX(-50%);
  }
  .morphing-circle.initial {
    width: 40px;
    height: 40px;
    bottom: -50px;
    border-radius: 9999px;
    scale: 1;
  }
  .morphing-circle.filled {
    width: 100%;
    height: 100%;
    bottom: 0;
    border-radius: 1rem;
    scale: 3;
  }
`;

const HeaderButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Custom style for morphing circle */}
      <style>{morphingCircleStyle}</style>
      <button
        className={`rounded-2xl text-base flex items-center justify-center font-semibold transition-colors duration-500 border min-h-14 min-w-56 overflow-hidden relative group whitespace-nowrap ${
          hovered ? 'text-black border-white' : 'text-white border-white'
        }`}
        style={{ zIndex: 1 }}
      >
        {/* Morphing Circle Fill Animation */}
        <span
          className={`morphing-circle bg-white absolute z-0 pointer-events-none ${
            hovered ? 'filled' : 'initial'
          }`}
        />
        {/* Content Wrapper for vertical centering */}
        <span className="relative flex flex-col items-center justify-center w-full h-full z-10">
          {/* Default (non-hover) content */}
          <span
            className={`flex items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3 transition-all duration-300 ease-in-out w-full ${
              hovered ? '-translate-y-8 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
            }`}
          >
            <img src={calendarIcon} alt="calendar" className="h-5 w-5" />
            <span className="whitespace-nowrap">BOOK A SHORT CALL</span>
          </span>
          {/* Hover content */}
          <span
            className={`flex items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out w-full ${
              hovered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
          >
            <img src={googleMeetIcon} alt="Google Meet" className="h-8 w-8" />
            <span className="whitespace-nowrap">GET STARTED</span>
            <img src={zoomIcon} alt="Zoom" className="h-8 w-8" />
          </span>
        </span>
      </button>
    </div>
  );
};

export default HeaderButton;