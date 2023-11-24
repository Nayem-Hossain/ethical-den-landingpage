import React from 'react';
import akps from "../assets/clients/akps.svg"
import dream_health from "../assets/clients/dream_health.svg"
import e_laj from "../assets/clients/e_laj.svg"
import wonder_lite from "../assets/clients/wonder_lite.svg"
import roaderr from "../assets/clients/roaderr.svg"
const Clients = () => {
    return (
        <div className='text-neutral-50 mt-[170px] mx-[129px]'>
            <p className='uppercase leading-loose tracking-widest mb-6'>Our Clients</p>
            <div className='flex justify-between items-center'>
                <div> <img src={akps} alt="" /></div>
                <div> <img src={dream_health} alt="" /></div>
                <div> <img src={e_laj}  alt="" /></div>
                <div> <img src={wonder_lite}  alt="" /></div>
                <div> <img src={roaderr}  alt="" /></div>
            </div>
        </div>
    );
};

export default Clients;