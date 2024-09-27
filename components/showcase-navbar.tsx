// /components/showcase-navbar.tsx

import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div className="overflow-hidden p-10 rounded-[6px] sticky top-5 z-50 md:mx-auto bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6 xl:w-4/5 2xl:w-[68%]">
      <Link href="/">
        <Image
          src="/logo/logo.svg"
          alt="Bird Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg">
          <Link href="/showcase" className="hover:text-blue-500">
            Showcase
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Process
          </Link>
          <Link href="/" className="hover:text-blue-500">
            Guarantees
          </Link>
        </div>
      </div>

      <div className="flex items-center md:gap-x-4 gap-x-2">
        <Link
          href="/meeting"
          className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-full border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book a Call
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
