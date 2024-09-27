// /components/footer.tsx

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10 px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium">
          <Image
            src="/logo/logo.svg"
            width={1000} // Adjust width for better performance
            height={1000} // Adjust height for better performance
            className="w-40"
            alt="Company Logo"
          />
        </h1>

        <p className="text-left text-xl text-gray-500">
          <a href="tel:+923234237294" className="hover:text-blue-400">
            +92-323-4237294
          </a>
        </p>

        <p className="text-left text-xl text-gray-500">
          <a
            href="mailto:hassanfarooq2504@gmail.com?subject=Your Subject&body=Your Message"
            className="hover:text-blue-400"
          >
            Send Email
          </a>
        </p>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2024 Apex. All Rights Reserved.
          <Link href="/privacy-policy" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
