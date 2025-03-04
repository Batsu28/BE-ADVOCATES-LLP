import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="text-black relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
