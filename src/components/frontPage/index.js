import React from "react";
import MainPage from "../mainPage/MainPage";
import macron from "../../pictures/cookies/macrons-min.jpg";

const FrontPage = () => {
  return (
    <MainPage header="My favorite" transparentHeader="recipes" img={macron} />
  );
};
export default FrontPage;
