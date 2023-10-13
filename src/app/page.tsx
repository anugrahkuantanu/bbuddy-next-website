// import { Button } from "@/components/ui/button";


// export default function Home() {
//   return <Button>Get started!!!</Button>;
// }


'use client'
import React from 'react';
import Image from 'next/image'; // Use Next.js's Image component for optimized image handling
import useMediaQuery from '@/hook/useMediaQuery';


const Home = ({ }) => {

  const isSmallScreen = useMediaQuery("(maxWidth: 900)");
  return (
    <section id="home">
      <div className="md:items-center md:h-full py-10">
        <div className='flex items-center md:flex-row flex-column justify-center sm:justify-start md:mt-10 mt-6 md:space-x-2.5'>
          <a href="/soon">
            <Image src='/assets/apple.svg' alt="App Store" width={129} height={42} />
          </a>
          <a href="/soon">
            <Image src='/assets/google.svg' alt="Google Play" width={144} height={43} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
