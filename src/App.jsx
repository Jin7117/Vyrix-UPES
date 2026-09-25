import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AppShowcase from "./components/AppShowcase.jsx";
import WhatsNew from "./components/WhatsNew.jsx";
import Reviews from "./components/Reviews.jsx";
import Platform from "./components/Platform.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-cream">
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <WhatsNew />
        <Reviews />
        <Platform />
      </main>
      <Footer />
    </div>
  );
}
