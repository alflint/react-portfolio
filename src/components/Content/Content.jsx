import React from "react";
import Jumbotron from "./Jumbotron/Jumbotron";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import "./Content.css";

function Content() {
    return (
        <div>
            <Jumbotron />
            
            <div className="anchor" id="about"></div>
            <section className="py-5 my-5">
                <About />
            </section>
            <div className="anchor" id="portfolio"></div>
            <section className="py-5 my-5">
                <Portfolio />
            </section>
            <div className="anchor" id="contact"></div>
            <section className="py-5 my-5">
                <Contact />
            </section>
            <div className="anchor" id="resume"></div>
            <section className="py-5 my-5">
                <Resume />
            </section>
        </div>
    );
}

export default Content;
