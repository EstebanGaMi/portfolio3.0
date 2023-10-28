import "./globals.css";
import Cover from "./components/Cover";

export const metadata = {
  title: "Portfolio",
  description: "This is my portfolio created with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#181818]">
        <Cover />
        {children}
      </body>
    </html>
  );
}
