import React, { useRef, useEffect } from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
// import ChooseLanguage from "../molecules/choose-language";
import ScrollReveal from "../special/ScrollReveal";

export default function Layout({ visibleNow, children }) {
  const scrollReveal = useRef(null);

  useEffect(() => {
    document.body.classList.add("is-revealed");
    document.body.classList.add("is-loaded");

    scrollReveal.current.init();
  }, []);

  return (
    <>
      <ScrollReveal
        ref={scrollReveal}
        children={() => (
          <>
            <Header />
            <div className="cursor">
              <Navbar visibleNow={visibleNow} />

              {children}

              <Footer />
            </div>
          </>
        )}
      />
    </>
  );
}
