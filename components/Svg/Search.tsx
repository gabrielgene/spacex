import * as React from 'react';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.64 11.39h-.659l-.233-.226a5.393 5.393 0 0 0 1.308-3.525 5.417 5.417 0 1 0-5.417 5.417 5.393 5.393 0 0 0 3.525-1.308l.225.233v.658l4.167 4.159 1.242-1.242-4.159-4.167Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
