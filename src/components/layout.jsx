import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
