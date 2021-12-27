import { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className="main-container">
                <section className="text-yellow-700 bg-gray-900 px-60 pb-40 pt-20 text-center font-bold">
                    <p className="text-4xl mb-5">MEMELANDIA</p>
                    <p className="">Inspired by Facebook!</p>
                    <Link className="underline" to="/contact-us"><p>Contact us!</p></Link>
                </section>
            </div>
        )
    }
}

export default About;