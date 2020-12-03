import React from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
import ChooseLanguage from "../molecules/choose-language";

export default function Layout({ visibleNow, children }) {
  return (
    <>
      <Header />
      <div className="cursor">
        <Navbar visibleNow={visibleNow} />
        
        {children}

        <Footer />
      </div>
    </>
  );
}
