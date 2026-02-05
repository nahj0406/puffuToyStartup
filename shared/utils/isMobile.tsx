'use client'

import { useMediaQuery } from "react-responsive";

const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

export default isMobile;

// 'use client';

// import { useMediaQuery } from 'react-responsive';

// export default function useIsMobile() {
//   return useMediaQuery({ query: '(max-width: 768px)' });
// }