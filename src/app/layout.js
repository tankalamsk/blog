
import Navbar from "@/components/Navbar";

import  "./globals.css"




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="contain">
        <div>
          <h1 className="blog-title">Blog </h1>
        </div>
        <div>
          <p className="subtitle">All the blogs you want.</p>
        </div>

        <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
 