import * as React from 'react';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={0.622} width={16} height={11.75} rx={2} fill="#263238" />
    <path
      d="m7.392 8.143.664-2.304-.48-1.528H7.12v-.152H9.6v.152h-.472l1.192 3.784.96-3.784h-.808v-.152h1.6v.152h-.528l-1.472 5.528H9.36L8.176 6.223l-1.04 3.616H6.44L4.424 4.31h-.376v-.152h2.6v.152h-.56l1.304 3.832Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
