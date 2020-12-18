import React, { useRef, useEffect } from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
import { useRouter } from "next/router";
import ScrollReveal from "../special/ScrollReveal";

export default function Layout({ visibleNow, children }) {
  const scrollReveal = useRef(null);
  const router = useRouter();
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
              
              {router.pathname !== "/" ? <Footer /> : null}
            </div>
          </>
        )}
      />
    </>
  );
}
