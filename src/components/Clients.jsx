import React from 'react';

const Clients = () => {
    return (
        <div className='text-neutral-50 mt-[170px] mx-[129px]'>
            <p className='uppercase leading-loose tracking-widest mb-6'>Our Clients</p>
            <div className='flex justify-between items-center'>
                <div> <img src="/src/assets/clients/akps.svg" alt="" /></div>
                <div> <img src="/src/assets/clients/dream_health.svg" alt="" /></div>
                <div> <img src="/src/assets/clients/e_laj.svg" alt="" /></div>
                <div> <img src="/src/assets/clients/wonder_lite.svg" alt="" /></div>
                <div> <img src="/src/assets/clients/roaderr.svg" alt="" /></div>
            </div>
        </div>
    );
};

export default Clients;