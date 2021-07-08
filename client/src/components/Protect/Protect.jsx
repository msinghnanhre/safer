import React from 'react'
import safety from "../../assets/safety.svg"
import screen from "../../assets/screen.svg"
import graphs from "../../assets/graphs.svg"
import "./Protect.scss"

function Protect() {
    return (
        <section className="protection">
            <h2 className="protection__title"> How do I protect myself? </h2>
            <div className="content">
                <img className="content__img" src={screen} alt="image of a laptop"/>
                <div className="content__body">
                    <img className="content__body-img" src={safety} alt="an icon refering to safety"/>
                    <h4 className="content__body-title">Safety Tips</h4>
                    <p className="content__body-text">Data privacy is more important than ever. Learn the best practices on how you can protect youself </p>
                    <button className="content__body-btn">Get Started</button>
                </div>
            </div>

            <div className="content">
                <div className="content__body">
                    <img className="content__body-img" src={safety} alt="an icon refering to safety" />
                    <h4 className="content__body-title">Request copy of your data</h4>
                    <p className="content__body-text">Data privacy is more important than ever. Learn the best practices on how you can protect youself </p>
                    <button className="content__body-btn">Get Started</button>
                </div>
                <img className="content__img" src={graphs} alt="image of a laptop" />
            </div>
        </section>
    )
}

export default Protect
