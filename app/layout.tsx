import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ClientBootstrap from "@/components/ClientBootstrap";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientBootstrap />
        <div className="relative flex min-h-screen flex-col bg-ink-950 text-slate-200 antialiased">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <div id="modal" />
      </body>
    </html>
  );
}
