'use client'

// import Link from 'next/link';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';


// function MyLogo() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     // Set the initial theme
//     setTheme(document.documentElement.getAttribute('data-theme') || 'light');

//     // Add event listener to monitor changes in the theme
//     const themeChangeListener = () => {
//       setTheme(document.documentElement.getAttribute('data-theme') || 'light');
//     };
//     document.documentElement.addEventListener('data-theme-changed', themeChangeListener);

//     // Cleanup event listener on component unmount
//     return () => {
//       document.documentElement.removeEventListener('data-theme-changed', themeChangeListener);
//     };
//   }, []);

//   const logoSrc = theme === 'dark' ? '/assets/bbuddy-logo-dark.png' : '/assets/bbuddy-logo.png';

//   return (
//     <Link href="/" passHref className="items-center hidden gap-2 sm:flex">
//         <div className="relative w-16 h-16 
//                       rounded-lg transition-all hover:-translate-y-0.5 md:block dark:border-white">
//           <Image 
//             src={logoSrc} 
//             alt="BBuddy Logo" 
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//     </Link>
//   );
// }

// export default MyLogo;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function MyLogo() {
  const { theme } = useTheme();
  
  // Set the logo source based on the theme
  const logoSrc = theme === 'dark' ? '/assets/bbuddy-logo-dark-nb.png' : '/assets/bbuddy-logo.png';

  return (
    <Link href="/" passHref  className="items-center hidden gap-2 sm:flex">
        <div className="relative w-16 h-16 
                       rounded-lg transition-all hover:-translate-y-0.5 md:block ">
          <Image 
            src={logoSrc} 
            alt="BBuddy Logo" 
            layout="fill"
            objectFit="contain"
          />
        </div>
    </Link>
  );
}

export default MyLogo;
