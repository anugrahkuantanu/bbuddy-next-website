import React from 'react';
import Image from 'next/image'; // Use Next.js's Image component for optimized image handling
import MaxWidthWrapper from '@/components/MaxWidthWrapper';


const Home = () => {
  return (
    <section id="home">

      <div className="md:items-center md:h-full py-2.5">
        <h1 className='font-playfair text-2xl font-bold text-center mt-72 '>Bbuddy</h1>
        <p className="mt-5 mb-3 text-sm md:text-xl text-center md:text-justify font-playfair">
            Welcome to our transformative app, carefully crafted to enhance your understanding of your emotions and thoughts. 
            Powered by cutting-edge Al technology, our platform provides invaluable guidance and support tailored specifically to your needs, 
            enabling you to confidently navigate life's challenges and enhance your mental well-being</p>
          <div className='flex items-center md:flex-row flex-column justify-center md:mt-10 mt-6 space-x-2.5'>
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
