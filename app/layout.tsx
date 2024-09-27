import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Social Services",
  description:
    "Transform your online presence with Apex Social Services. We provide tailored social media management and content strategies to help your brand engage, grow, and succeed in the digital world.",
  icons: {
    icon: "/logo/logo.svg", // Define the favicon in metadata
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
