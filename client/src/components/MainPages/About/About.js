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
                    <Link to="#"><p>Contact us!</p></Link>  
                    <p>You can add post from the big pink plus! </p>
                        <p>Have fun!</p>
                </section>
            </div>
        )
    }
}

export default About;