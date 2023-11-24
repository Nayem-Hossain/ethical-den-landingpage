import React from "react";
import { Navigationbar } from "./NavigationBar";
import { Navbar, Button } from "keep-react";

const Hero = () => {
    return (
        <div className="hero bg-[url('/src/assets/hero.svg')] bg-cover bg-no-repeat flex flex-col h-screen">

            <Navigationbar />

            <div className="mx-[129px] my-auto">
                <div className="text-[70px] font-bold capitalize tracking-wide">
                    <h1 className="text-neutral-50">innovative Cyber Agency</h1>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-300">Artificial Intelligence</h1>
                </div>
                <div>
                    <p className="text-neutral-50 text-[22px] leading-loose mt-8 w-[825px]">
                        We're the best digital marketing agency from West Bengal, curating experiences that users fall in love with.
                    </p>
                </div>
            </div>

            <div className="mx-[129px] flex gap-x-8 my-auto">
                <img src="/src/assets/Insta.svg" alt="instagram" srcset="" />
                <img src="/src/assets/Fb.svg" alt="facebook" srcset="" />
                <img src="/src/assets/Be.svg" alt="be" srcset="" />
            </div>

        </div>
    );
};

export default Hero;
