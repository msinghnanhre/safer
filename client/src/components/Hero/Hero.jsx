import React from 'react'
import "./Hero.scss"
import Lottie  from 'react-lottie';
import hacker from "../../assets/hacker.json"

function Hero() {
    const hackerfile = {
        loop: true,
        autoplay: true,
        animationData: hacker,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (
        <section className="hero">
            <div className="hero__left">
                <h3 className="hero__text">In the last year alone  __% of Americans have fallen victim to identity theft.</h3>
                <button className="hero__button">SEARCH</button>
            </div>
            <Lottie options={hackerfile} height={300} width={400} />
        </section>
    )
}

export default Hero
