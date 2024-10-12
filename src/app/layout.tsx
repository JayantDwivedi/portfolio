import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayant",
  description: "A software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=link" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
