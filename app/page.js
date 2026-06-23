import TopBar from "./components/TopBar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Area from "./components/Area.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MobileFabs from "./components/MobileFabs.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <WhyUs />
      <Area />
      <Contact />
      <Footer />
      <MobileFabs />
    </div>
  );
}
