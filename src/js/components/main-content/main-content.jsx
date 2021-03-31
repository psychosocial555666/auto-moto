import React from "react";
import Description from "../description/description";
import Slider from "../slider/slider";
import Tabs from "../tabs/tabs";

function MainContent() {
  return (
    <React.Fragment>
      <main className="main-content">
        <div className="container">
          <div className="main-content__content">
            <Slider/>
            <Description />
            <Tabs />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainContent;