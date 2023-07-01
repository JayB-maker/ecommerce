import { Card } from "../styles";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Card margin="100px 0 0">{children}</Card>
      <Footer />
    </>
  );
};

export default Layout;
