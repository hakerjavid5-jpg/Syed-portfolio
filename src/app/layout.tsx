import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Syed Musthaak -- Senior Graphic Designer & Brand Specialist",
  description: "Senior Graphic Designer & Brand Specialist with 8+ years of experience in branding, print media, social media, UI/UX, AI video editing, and photography.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${kanit.variable} antialiased`} style={{ background: "#0C0C0C" }}>
        {children}
      </body>
    </html>
  );
}
