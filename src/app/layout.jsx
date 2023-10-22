import "./globals.css";

import Cover from "./components/Cover";

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
