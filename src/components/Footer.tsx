import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-950 z-10 border-t border-zinc-300 py-2">
      <div className="container mx-auto text-center">
        <Link href="/contact"  className="mx-2 hover:underline">Contact Us
        </Link>
        <Link href="/privacy" className="mx-2 hover:underline">Privacy Policy
        </Link>
        <Link href="/termcondition" className="mx-2 hover:underline">Term and condition
        </Link>
        {/* <a className="mx-2 hover:underline">Contact Us</a>
        <a className="mx-2 hover:underline">Privacy Policy</a> */}
      </div>
    </footer>
  );
};

export default Footer;

// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-950 z-10 border-t border-zinc-300 py-2">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <Link href="/contact" className="hover:underline">
//             Contact Us
//           </Link>
//         </div>
//         <div className="flex justify-end">
//           <Link href="/privacy" className="mx-2 hover:underline">
//             Privacy Policy
//           </Link>
//           <Link href="/termcondition" className="mx-2 hover:underline">
//             Terms and Conditions
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
