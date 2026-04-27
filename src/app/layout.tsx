import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "next-themes";

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
    <html lang="ru" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
