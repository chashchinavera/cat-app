import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
