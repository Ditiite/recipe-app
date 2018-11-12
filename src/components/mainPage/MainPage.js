// @flow
import * as React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer.js";

type Props = {
  header?: string,
  transparentHeader?: string,
  img: string,
  children: React.Node
};

const MainPage = ({ header, transparentHeader, children, img }: Props) => {
  const FrontPageStyle = {
    backgroundImage: "url(" + img + ")"
  };

  const strongImage = {
    backgroundImage: "url(" + img + ")"
  };

  return (
    <section
      className="main-page main-page__img-container"
      style={FrontPageStyle}>
      <Navigation />
      <h1>{header}</h1>
      <div className="main-page__half-white">
        <strong style={strongImage}>{transparentHeader}</strong>
      </div>
      <div className="main-page__img-container--sm" style={FrontPageStyle}>
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default MainPage;
