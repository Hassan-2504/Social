"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import WordRotate from "@/components/magicui/word-rotate";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import LetsMakeThingsHappenSection from "@/components/ui/let-make-things-happens";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Transform your online presence with our web design and development services. Using tools like WordPress, HTML/CSS, React & Next, MERN Stack we create responsive, user-friendly websites. Key features include custom designs, mobile optimization, and SEO-friendly structures to enhance visibility.",
  },
  {
    icon: "/images/Social Media.png",
    title: "Social Media Management",
    description:
      "Streamline your brand's social media presence with our management services.We schedule posts, monitor engagement, and analyze performance. Features include content calendars, audience insights, and comprehensive reporting to boost interaction and growth.",
  },

  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Elevate your brand through targeted social media marketing. We leverage platforms like Facebook Ads and Instagram Ads to create engaging ad campaigns.Key features include audience targeting, A/B testing, and performance tracking to maximize your return on investment.",
  },
  {
    icon: "/images/Video Editing.svg",
    title: "Video Editing",
    description:
      "Elevate your content with our professional video editing services. Using tools like Adobe Premiere Pro and  Capcut, we transform raw footage into engaging videos. Key features include color correction, audio enhancement, and seamless transitions to ensure your message resonates and captivates your audience.",
  },
  {
    icon: "/images/Content writting.png",
    title: "Content Writting",
    description:
      "Enhance your brand's voice with professional content writing. Our team uses tools like Grammarly and Yoast SEO to ensure high-quality, optimized content. Key features include blog posts, website copy, and SEO-friendly articles that engage your audience and improve search rankings.",
  },
  {
    icon: "/images/Graphic Design.png",
    title: "Graphic Designing",
    description:
      "Create stunning visuals with our graphic design services. Utilizing tools like Adobe Illustrator and Canva, we produce eye-catching graphics for various platforms. Features include branding materials, social media graphics, and promotional content designed to captivate and convert your audience.",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
      inset-0 
      -z-10 h-full w-full bg-[#fafafa]
       bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]"
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/logo.svg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform mr-10">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center ml-10">
          <a
            href="tel:+923234237294"
            className="hidden lg:flex hover:text-blue-500"
          >
            <button className="px-4 py-2 rounded-md flex items-center">
              (+92)-323-4237294
            </button>
          </a>
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] 
          rounded-full border-2 border-black dark:border-white bg-[#121212] text-white 
          transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
          dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book Call
          </Link>
        </div>
      </Element>
      <main className="pb-10 mt-16">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1>
            <CoverDemo />
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Boost Your Online Presence Today! Contact Us for the Best Social
            Media Solutions.
          </p>
        </div>

        <div className="flex md:justify-center items-center gap-x-4 mx-6 md:mx-20">
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] 
          rounded-full border-2 border-black dark:border-white bg-[#121212] text-white 
          transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
          dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book Call
          </Link>

          <Link
            href={"/showcase"}
            className="bg-[#e2e2e2] hover:bg-[#abcbff] py-3 px-10 md:px-16 md:text-xl
          border-4 border-black rounded-full hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
            dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Showcase
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-20 md:mt-16 px-10 ">
          <WordRotate
            duration={3000}
            className="text-4xl font-bold text-black dark:text-white"
            words={["Website", "Development"]}
          />
          <WordRotate
            duration={3000}
            className="text-4xl font-bold text-black dark:text-white"
            words={["Social Media", "Marketing"]}
          />
          <WordRotate
            duration={3000}
            className="text-4xl font-bold text-black dark:text-white"
            words={["Content", "Writing"]}
          />
          <WordRotate
            duration={3000}
            className="text-4xl font-bold text-black dark:text-white"
            words={["Website", "Designing"]}
          />
        </div>
      </main>
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-24">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={1000}
                  height={1000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto mt-20">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
          >
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>
      <section className="mt-20">
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.svg"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;As a newcomer in the industry, partnering with Apex Social
              Solutions has been a game changer. Their guidance and expertise
              have helped me navigate the early challenges, and I’m excited
              about the growth ahead. Their support has made all the difference
              for my business!&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jamie, New Entrepreneur <br />
              Founder, Fresh Start Co.
            </span>
          </div>
        </main>
      </section>{" "}
      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.svg"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">
            <a
              href="tel:+923234237294"
              className="text-left text-xl text-gray-500 hover:text-blue-400"
            >
              +92-323-4237294
            </a>
          </p>
          <p className="text-left  text-xl  text-gray-500">
            <a
              href="mailto:hassanfarooq2504@gmail.com?subject=Your Subject&body=Your Message"
              className="hover:text-blue-400"
            >
              Send Email
            </a>
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Apex. All Rights Reserved.
          <Link href="/privacy-policy" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
