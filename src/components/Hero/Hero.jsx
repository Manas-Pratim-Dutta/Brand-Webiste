import React from "react";

function Hero() {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>GOOD QUALITY SHOULD ALWAYS BE FIRST CHOICE</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad numquam labore ipsa tempora voluptatem ea ducimus laborum voluptates non incidunt sapiente vel, eius doloribus ipsum ipsam blanditiis? Earum, fugiat.
                    </p>
                    <div className="hero-btn">
                        <button>Shop</button>
                        <button>Explore More</button>
                    </div>
                    <div className="alternative-shopping">
                        <p>Also Available On</p>

                        <div className="brand-icons">
                            <img src="/images/amazon.png" alt="amazon-logo" />
                            <img src="/images/flipkart.png" alt="amazon-logo" />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/hero-image.png" alt="hero-image" />
                </div>

            </main>
        </>

    );
}

export default Hero;