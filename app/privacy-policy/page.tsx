"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div
      className="overflow-clip 
    inset-0 
    -z-10 h-full w-full bg-[#fafafa]
     bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      <header className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6">
        <Link href={"/"}>
          <Image
            src={"/logo/logo.svg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <nav className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg">
          <Link href={"/showcase"} className="hover:text-blue-500">
            Showcase
          </Link>
          <Link href={"/#services"} className="hover:text-blue-500">
            Services
          </Link>
          <Link href={"/#process"} className="hover:text-blue-500">
            Process
          </Link>
          <Link href={"/#guarentees"} className="hover:text-blue-500">
            Guarantees
          </Link>
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] 
          rounded-full border-2 border-black dark:border-white bg-[#121212] text-white 
          transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
          dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book a Call
          </Link>
        </nav>
      </header>

      <main className="py-10 px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%]">
        <h1 className="text-3xl md:text-5xl font-medium mb-6">
          Privacy Policy
        </h1>

        <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
        <p className="mb-4">
          Welcome to Apex Social Services. This Privacy Policy outlines how we
          collect, use, and protect your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information from you in various ways,
          including when you visit our site, fill out a form, or interact with
          us in other ways. This may include your name, email address, phone
          number, and other relevant details.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We may use the information we collect from you for various purposes,
          including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To improve our website and services.</li>
          <li>To personalize your experience.</li>
          <li>
            To send periodic emails regarding your order or other products and
            services.
          </li>
          <li>To respond to your inquiries and support needs.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Data Protection</h2>
        <p className="mb-4">
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over the
          Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties except to provide services
          you have requested.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
        <p className="mb-4">
          You have the right to request access to the personal information we
          hold about you, to have any inaccuracies corrected, and to request the
          deletion of your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="text-xl text-gray-500">
          <a href="tel:+923234237294" className="hover:text-blue-400">
            +92-323-4237294
          </a>
        </p>
        <p className="text-xl text-gray-500">
          <a
            href="mailto:hassanfarooq2504@gmail.com?subject=Inquiry&body=Your Message"
            className="hover:text-blue-400"
          >
            Send Email
          </a>
        </p>
      </main>

      <footer className="bg-[#fafafa] py-10 px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium">
            <Image
              src={"/logo/logo.svg"}
              width={10000}
              height={10000}
              className="w-40"
              alt="logo"
            />
          </h1>
          <div className="flex md:justify-center gap-x-4 mt-10">
            © 2025 Apex. All Rights Reserved.
            <Link href="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
