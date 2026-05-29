import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Oscar\'s Trash Bin Cleaning - Fresh & Clean Bins',
  description: 'Affordable, eco-friendly trash bin cleaning services for homes. Remove odors, bacteria, and pests with our reliable deep cleaning services.',
  keywords: ["trash bin cleaning, bin cleaning, residential cleaning, sanitation, eco-friendly, deep cleaning, odor removal, pest control, Oscar's Trash Bin Cleaning"],
  openGraph: {
    "title": "Oscar's Trash Bin Cleaning - Fresh & Clean Bins",
    "description": "Affordable, eco-friendly trash bin cleaning services for homes. Remove odors, bacteria, and pests with our reliable deep cleaning services.",
    "url": "https://www.oscarstrashbincleaning.com",
    "siteName": "Oscar's Trash Bin Cleaning",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780029439119-zwrf2cxx.jpg",
        "alt": "Trash bin being power washed"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Oscar's Trash Bin Cleaning - Fresh & Clean Bins",
    "description": "Affordable, eco-friendly trash bin cleaning services for homes. Remove odors, bacteria, and pests with our reliable deep cleaning services.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780029439119-zwrf2cxx.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
