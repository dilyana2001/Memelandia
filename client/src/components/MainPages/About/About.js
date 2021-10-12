import { Component } from "react";
import { Link } from "react-router-dom";

import './About.css'

class About extends Component {
    render() {
        return (
            <div className="main-container">
                <section className="about-section">
                    <h1>MEMELANDIA</h1>
                    <p>Inspired by Facebook!</p>
                    <Link to="/contact-us"><p>Contact us!</p></Link>
                </section>
            </div>
        )
    }
}

export default About;