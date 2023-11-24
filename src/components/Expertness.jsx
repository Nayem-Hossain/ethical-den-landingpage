import React from 'react';

const Expertness = () => {
    return (
        <div className="mx-[129px] mt-[131px]">
            <div className='flex justify-between items-center mb-[187px]'>
                <div className='w-[480px]'>
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-300 text-[32px] font-bold uppercase mb-6'>Security Experts</h2>
                    <p className='text-neutral-50'>Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity initiatives is critical to staying ahead of the constantly evolving risks that are out there. With Audits, Penetration Testing & Security System Architecture and Implementation, Ethical Den can help you better understand where you are now and where you need to be tomorrow.</p>
                </div>
                <div>
                    <img src="/src/assets/SecurityExpert.svg" alt="SecurityExpert" className='w-[429px] h-[397px]' />
                </div>
            </div>

            <div className='flex flex-row-reverse justify-between items-center mb-[187px]'>
                <div className='w-[480px]'>
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-300 text-[32px] font-bold uppercase mb-6'>Development Experts</h2>
                    <p className='text-neutral-50'>We create unique & efficient digital solutions that help businesses grow. By bringing the latest IT advancements to various industries, we deliver custom software that completely fits the behavior and needs of our customers. While Ethical Den records continuous growth and expansion, with the software solutions we provide, our customers grow, too.</p>
                </div>
                <div>
                    <img src="/src/assets/DevelopmentExpert.svg" alt="SecurityExpert" className='w-[429px] h-[397px]' />
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='w-[480px]'>
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-300 text-[32px] font-bold uppercase mb-6'>Marketing Experts</h2>
                    <p className='text-neutral-50'>At Ethical Den, we pride ourselves on digital marketing campaigns that build Brand Equity by using unique insights into your target market. A solid social media marketing strategy supports your wider digital marketing approach. Our team of digital marketing Cosmonauts ensure that your brands' online marketing strategy and planning are prepared to the standards of global best practices and built to achieve your brand's objectives.</p>
                </div>
                <div>
                    <img src="/src/assets/MarketingExpert.svg" alt="SecurityExpert" className='w-[429px] h-[397px]' />
                </div>
            </div>

        </div>
    );
};

export default Expertness;