import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC<{
  hasHeader?: boolean;
  hasFooter?: boolean;
}> = ({ children, hasHeader = true, hasFooter = true }) => (
  <div>
    {hasHeader && <Header />}
    {children}
    {hasFooter && <Footer />}
  </div>
);

export default Layout;
