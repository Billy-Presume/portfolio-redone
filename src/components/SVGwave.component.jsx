import "../infrastructure/design/svg.scss";

const SVGComponent = (props) => (
  <svg
    className="waves"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shapeRendering="auto"
    {...props}
  >
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
      />
    </defs>
    <g className="parallax">
      <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(17, 31, 77, 0.5)" />
      <use xlinkHref="#gentle-wave" x={48} y={2} fill="rgba(17, 31, 77, 0.3)" />
      <use xlinkHref="#gentle-wave" x={48} y={4} fill="rgba(17, 31, 77, 0.1)" />
      <use
        xlinkHref="#gentle-wave"
        x={48}
        y={6}
        fill="rgba(17, 31, 77, 0.05)"
      />
    </g>
  </svg>
);

export default SVGComponent;
