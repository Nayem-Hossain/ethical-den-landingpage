import React from 'react';
import e_laj from "../assets/work/E_laj.svg";
import Dream_Health from "../assets/work/Dream_Health.svg";
import Roaderr from "../assets/work/Roaderr.svg";
import Wonderlite from "../assets/work/Wonderlite.svg";
import { HiMiniChevronRight } from "react-icons/hi2";

const Work = () => {
    return (
        <div className='text-neutral-50 mt-[160px] mx-[129px]'>
            <p className='uppercase leading-loose tracking-widest mb-6'>Our Work</p>
            <div className='flex gap-x-40 justify-between'>
                <div className='flex flex-col gap-40'>
                    <div className='relative'>
                        <img src={e_laj} alt="E-laj" />
                        <div className='absolute top-8 left-8 text-white'>
                            <h6 className='text-[28px] font-semibold'>E-laj</h6>
                            <p>Branding , App Design, UI UX</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={Dream_Health} alt="Dream Health" />
                        <div className='absolute top-8 left-8 text-white'>
                            <h6 className='text-[28px] font-semibold'>Dream Health</h6>
                            <p>Branding , Web Design, UI UX</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-40 mt-20'>
                    <div className='relative'>
                        <img src={Roaderr} alt="Roader" />
                        <div className='absolute top-8 left-8 text-white'>
                            <h6 className='text-[28px] font-semibold'>Roaderr</h6>
                            <p>Branding , Web Design</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={Wonderlite} alt="Wonderlite" />
                        <div className='absolute top-8 left-8 text-white'>
                            <h6 className='text-[28px] font-semibold'>Wonderlite</h6>
                            <p>Branding , Web Design, Social Media Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-center me-16 mt-[72px]'>
                <p className='text-xs uppercase'>see all our work</p>
                <HiMiniChevronRight className='text-neutral-50 pt-1 font-semibold' />
            </div>
        </div>
    );
};

export default Work;