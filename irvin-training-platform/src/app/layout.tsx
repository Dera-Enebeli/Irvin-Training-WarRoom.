import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Irvin Security Training Platform",
  description: "Security auditing and sales training for Nigerian financial institutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}