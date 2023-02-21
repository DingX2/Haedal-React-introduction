import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CardNews from "./CardNews";
import App from "./App";

import Header from "./Header";
import Footer from "./Footer";
import "./base.css";
import "./sandbox.css";
import "./embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App2 = () => (
  <main className="sandbox">
    <Header />
    <section className="sandbox__carousel">
      <CardNews slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
