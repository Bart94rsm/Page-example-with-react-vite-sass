import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/hero";
import Step from "./components/Step";
import Argomento from "./components/Argomento";
import Footer from "./components/Footer";
import "./index.scss";

const steps = [
  { num: "1", title: "Step 1", text: "lorem ipsum" },
  { num: "2", title: "Step 2", text: "lorem ipsum" },
  { num: "3", title: "Step 3", text: "lorem ipsum" },
];

const lezioni = ["Lezione 1", "Lezione 2", "Lezione 3"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <main>
      <Step steps={steps} />
      <Argomento lezioni={lezioni} />
    </main>
    <Footer />
  </React.StrictMode>
);
