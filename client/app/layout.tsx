import Sidebar from "./components/Sidebar";

import "./globals.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen max-w-7xl mx-auto py-10 bg-gray-100 grid gap-5 grid-cols-[1fr_2fr] relative">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
