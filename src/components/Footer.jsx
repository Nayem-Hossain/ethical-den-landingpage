import React from "react";

const Footer = () => {
    return (
        <div className="text-neutral-50 mt-[170px] mx-[129px] pb-16">
            <div className="flex justify-between gap-10">
                <div className="lg:w-[60%]">
                    <div className="">
                        <p className="uppercase leading-loose tracking-widest mb-6">
                            Hire Us
                        </p>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-400 text-[46px] font-semibold uppercase leading-[64px]
tracking-wide">
                            Work with Ethical DEn
                        </h2>
                    </div>
                    <div className="mt-16">
                        <p className="uppercase leading-loose tracking-widest mb-6">
                            services
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <p className="border rounded-full px-8 py-2">digital marketing</p>
                            <p className="border rounded-full px-8 py-2">cyber security</p>
                            <p className="border rounded-full px-8 py-2">seo</p>
                            <p className="border rounded-full px-8 py-2">branding</p>
                            <p className="border rounded-full px-8 py-2">ui/ux</p>
                            <p className="border rounded-full px-8 py-2">Web development</p>
                            <p className="border rounded-full px-8 py-2">
                                social media marketing
                            </p>
                        </div>
                    </div>
                    <div className="mt-[65px]">
                        <form className="w-[80%]">
                            <div className="flex justify-between items-center gap-10">
                                <div className="w-full">
                                    <input
                                        className="w-full text-xl bg-transparent py-1 leading-normal tracking-widest focus:outline-none border-b border-[#323232] uppercase placeholder:text-neutral-50"
                                        type="text"
                                        placeholder="Name"
                                        aria-label="Full name"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        className="w-full text-xl bg-transparent py-1 leading-normal tracking-widest focus:outline-none border-b border-[#323232] uppercase placeholder:text-neutral-50"
                                        type="text"
                                        placeholder="Email"
                                        aria-label="Email"
                                    />
                                </div>
                            </div>
                            <div className="mt-[60px]">
                                <input
                                    className="w-full text-xl bg-transparent py-1 leading-normal tracking-widest focus:outline-none border-b border-[#323232] uppercase placeholder:text-neutral-50"
                                    type="text"
                                    placeholder="Project details (Optional)"
                                    aria-label="Email"
                                />
                            </div>

                            <div class="p-0.5 rounded-full bg-gradient-to-br from-cyan-400 to-lime-400 mt-16 w-[185px]">
                                <button type="submit" class="px-16 py-3 bg-black rounded-full w-full">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="">
                    <div>
                        <h3 className="text-2xl font-bold uppercase leading-loose tracking-widest mb-4">
                            Contacts
                        </h3>
                        <p>hello@ethicalden.com</p>
                        <p>+91 9547578920</p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold uppercase leading-loose tracking-widest mb-4">
                            Follow
                        </h3>
                        <div className="flex items-center justify-start gap-x-8">
                            <img src="/src/assets/Insta.svg" alt="instagram" srcset="" />
                            <img src="/src/assets/Fb.svg" alt="facebook" srcset="" />
                            <img src="/src/assets/Be.svg" alt="be" srcset="" />
                            <img src="/src/assets/Ball.svg" alt="be" srcset="" />
                        </div>
                    </div>
                    <div className="lg:w-fit mt-8">
                        <h3 className="text-2xl font-bold uppercase leading-loose tracking-widest mb-4">
                            Address
                        </h3>
                        <div className="pb-4">
                            <h6 className="text-lg font-semibold">Kolkata Office:</h6>
                            <p className="text-md">ANO-312, Astra Towers, New Town, Kolkata</p>
                        </div>
                        <div className="pb-4">
                            <h6 className="text-lg font-semibold">Siliguri Office:</h6>
                            <p className="text-md">Opposite of State Bank ATM, Pradhan Nagar, Siliguri</p>
                        </div>
                        <div className="pb-4">
                            <h6 className="text-lg font-semibold">Bangalore Office:</h6>
                            <p className="text-md">Gulab Plaza, Mahakavi Kuvempu Rd, Rajajinagar, Bengaluru</p>
                        </div>
                        <div className="pb-8">
                            <h6 className="text-lg font-semibold">Bangladesh Office:</h6>
                            <p className="text-md">Nabi Nagar, Muhammadpur, Dhaka</p>
                        </div>
                        <div className="">
                            <p className="font-semibold">© 2023, Ethical Den, all rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
