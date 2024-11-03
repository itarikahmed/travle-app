import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Travel App",
  description: "This is a travel app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased relative overflow-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
