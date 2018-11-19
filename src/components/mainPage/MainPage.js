// @flow
import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer.js";

type Props = {
  header?: string,
  transparentHeader?: string,
  img: string,
  children: React.Node
};

class MainPage extends Component<Props> {
  state = {
    show: true,
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
    console.log('Click')
  }
  
  render() {
    const { img, transparentHeader, children, header } = this.props;
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
        <div className="nav-hamburger-icon" onClick={this.handleShow}>
          <i className="fas fa-bars"></i>
        </div>
        {this.state.show && (<Navigation />)}
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
  }
};

export default MainPage;
