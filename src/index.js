import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import TipCalc from "./TipCalculator/TipCalc";
// import SplitBill from "./SplitBill/App";
// import Popcorn from "./UsePopcorn/App-v1";
// import Popcorn from "./UsePopcorn/App-v3";
// import StarRating from "./UsePopcorn/StarRating";
// import TextExpanderApp from "./TextExpander/TextExpander";
// import HowReactWorks from "./HowReactWorks/App";
// import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";
// import Geolocation from "./GeoLocation-chellenge/GeoLocation";
import Quiz from "./Quiz-reducer/Quizz-app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Popcorn /> */}
    {/* <StarRating
      size={44}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={44} defaultRating={2} /> */}
    {/* <TextExpanderApp /> */}
    {/* <Popcorn /> */}
    {/* <CurrencyConverter /> */}
    {/* <Popcorn /> */}
    {/* <Geolocation /> */}
    <Quiz />
  </React.StrictMode>
);
