import { useState } from 'react';

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

interface ButtonProps {
  color?: string; // main color
  text?: string;
  variant?: 'solid' | 'outline';
}

const Button = ({
  color = '#004fce',
  text = 'Book Free Discovery Call',
  variant = 'solid',
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  // Dynamic styles
  const isOutline = variant === 'outline';

  // Inline style for custom color (for border and background)
  const customStyle = isOutline
    ? {
        borderColor: color,
        backgroundColor: hovered ? color : 'transparent',
        color: '#ffffff',
      }
    : {
        backgroundColor: color,
        color: '#ffffff',
        borderColor: color,
      };

  return (
    <>
      <style>{morphingCircleStyle}</style>
      <button
        className={`rounded-2xl px-8 text-base flex items-center justify-center duration-500 border min-h-14 min-w-52 max-h-14 overflow-hidden relative group whitespace-nowrap font-semibold uppercase`}
        style={{ zIndex: 1, ...customStyle }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Morphing Circle Fill Animation (only for solid or for outline on hover) */}
        {(variant === 'solid' || (variant === 'outline' && hovered)) && (
          <span
            className={`morphing-circle bg-white opacity-10 absolute z-0 pointer-events-none ${
              hovered ? 'filled' : 'initial'
            }`}
          />
        )}
          {text}
      </button>
    </>
  );
};

export default Button;