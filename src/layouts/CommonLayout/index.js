import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollTopButton from "../../components/Common/Button/ScrollTopButton";
export default function CommonLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <ScrollTopButton />
    </React.Fragment>
  );
}
