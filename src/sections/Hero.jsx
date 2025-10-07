import React from 'react'
import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import Experience from "../components/HeroModels/Experience.jsx";


const Hero = () => {
    return (
        <section id="Hero" className="relative overflow-hidden min-h-screen">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>
            <div className="Hero-layout grid md:grid-cols-2 grid-cols-1 min-h-screen items-center gap-8 px-5 md:px-20">
                {/*LEFT: HERO CONTENT*/}
                <header className="flex flex-col justify-center">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                From
                                <span className="slide">
                                 <span className="wrapper">
                                     {words.map((word) => (
                                         <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                         <img
                                             src={word.imgPath}
                                             alt={word.text}
                                             className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                         />
                                         <span>{word.text}</span>
                                     </span>
                                     ))}
                                 </span>
                             </span>
                            </h1>
                            <h1>vision to project</h1>
                            <h1>that deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hey, I am Amit, a passionate Electronics Engineer based
                        </p>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            in India with a passion for Biomedical and Neuroscience
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="Button"
                            text="Checkout my work"
                        />

                    </div>
                </header>

                {/*RIGHT: 3D Picture*/}
                <figure>
                    <div className="hero-3d-layout border-red-200 border-2">
                        <Experience />
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero