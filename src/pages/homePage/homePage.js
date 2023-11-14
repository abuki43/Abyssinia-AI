import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import main_img from "./trans3.png"
import ai from "./ai.png"
import "./Home.css";
import fast from "./thunder-icon.svg"
import secure from "./lock-icon.svg"
import unlimited from "./unlimited.svg"
import intell from "./intel.svg"


function homePage() {
  return (
    <section className="mainPage_container">
      <div className="mainPage">
        <Navbar />
        <div id="skew"></div>
        <main>
          <div className="left">
            <h2>Boost your productivity with <span>Abyssinia AI</span></h2>
            <h3>24/7 virtual assistant</h3>
            <button><Link to="/ask">Ask me</Link></button>
          </div>
          <div className="right">
            <div className="img-container">
              <img className="mainImg" src={ai} alt="main-img" />
            </div>
          </div>
        </main>
        <div className="properties">
          <div className="property">
            <img src={fast} alt="fast" />
            <h3>Fast</h3>
            <p>Get instant response with our lightning-fast chat bot</p>
          </div>
          <div className="property">
            <img src={unlimited} alt="unlimited" />
            <h3>Unlimited Access</h3>
            <p>Ask as many questions as you want, any time, any where</p>
          </div>
          <div className="property">
            <img src={secure} alt="secure" />
            <h3>secure</h3>
            <p>Your privacy is our priority. Chat with confidence knowing your data is protected</p>
          </div>
          <div className="property">
            <img src={intell} alt="intel" />
            <h3>Intelleginet</h3>
            <p>Get accurate responses to your queries</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default homePage;
