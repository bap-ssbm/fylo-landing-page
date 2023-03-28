import Header from "./Header";
import GetStarted from "./GetStarted";
import MiddleSection from "./MiddleSection";
import ProductiveSection from "./ProductiveSection";
import Testimonials from "./Testimonials";
import GetAccess from "./GetAccess";
import Footer from "./Footer";
import { ReactComponent as DesktopBg } from './bg-curvy-desktop.svg';
import { ReactComponent as MobileBg } from './bg-curvy-mobile.svg';
import { useState, useEffect } from "react";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      
      <div className="top-section">
      <div className="background-img">
        {viewportWidth > 768 ? <DesktopBg /> : <MobileBg />}
      </div>
        <Header />
        <GetStarted />
      </div>
      <div className="bottom-section">
        <MiddleSection />
        <ProductiveSection />
        <Testimonials />
        <GetAccess />
        <Footer />
      </div>

    </>
  );
}

export default App;
