// app/layout.tsx
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { Inter } from "next/font/google"; // ✅ Inter フォントをインポート

const Inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // 任意の変数名
});

export const metadata = {
  title: "My App",
  description: "Using Inter font from Google Fonts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
