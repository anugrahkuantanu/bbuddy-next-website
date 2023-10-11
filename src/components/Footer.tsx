import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-950 z-10 border-t border-zinc-300 py-2">
      <div className="container mx-auto text-center">
        {/* <Link href="/contact">
          <a className="mx-2 hover:underline">Contact Us</a>
        </Link>
        <Link href="/privacy">
          <a className="mx-2 hover:underline">Privacy Policy</a>
        </Link> */}
        <a className="mx-2 hover:underline">Contact Us</a>
        <a className="mx-2 hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
