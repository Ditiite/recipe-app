import React from "react";
import MainPage from "../mainPage/MainPage";
import macron from "../../pictures/cookies/m.jpg";

const FrontPage = () => {
  return (
    <MainPage header="My favorite" transparentHeader="recipes" img={macron} />
  );
};
export default FrontPage;
