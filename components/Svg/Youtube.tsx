import * as React from 'react';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.605.622H2.395A2.416 2.416 0 0 0 0 3.017v6.966a2.416 2.416 0 0 0 2.395 2.394h11.21A2.416 2.416 0 0 0 16 9.983V3.017A2.38 2.38 0 0 0 13.605.622Zm-2.884 5.279-3.7-2.014c-.436-.217-.98.11-.98.599v4.027c0 .49.544.817.98.599l3.645-2.014c.49-.217.49-.925.055-1.197Z"
      fill="#263238"
    />
  </svg>
);

export default SvgComponent;
