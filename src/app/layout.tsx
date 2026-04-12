import { Roboto } from "next/font/google";
import "./globals.css";
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
      <body>{children}</body>
      <body className={roboto.className}>
      </body>
    </html>
  );
}
