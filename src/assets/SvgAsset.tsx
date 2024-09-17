export const Svg = () => {
  return (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#80d0f7", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#42a5f5", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#0078d7", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
