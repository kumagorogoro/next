// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google"; // ✅ Inter フォントをインポート

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // 任意の変数名
});

export const metadata = {
  title: "My App",
  description: "Using Inter font from Google Fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
