import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/Project1.png",
    title: "Tokner",
    link: "https://tokners.webflow.io",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Portfolio.png",
    title: "Portfolio Website",
    link: "https://sumairportfolio.webflow.io",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Hotel.png",
    title: "Hotel Nordic",
    link: "https://hotelnordic.se",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Resturent.png",
    title: "Blecktornskallaren",
    link: "https://blecktornskallaren.se",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
