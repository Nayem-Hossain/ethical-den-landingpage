import React from "react";
import Nataraj_Sharma from "../assets/teams/Nataraj_Sharma.svg";
import Nazmul_Islam from "../assets/teams/Nazmul_Islam.svg";
import Shehnaz_Sultana from "../assets/teams/Shehnaz_Sultana.svg";
import Sajal_Ahmed from "../assets/teams/Sajal_Ahmed.svg";
import Sanjana_Akter from "../assets/teams/Sanjana_Akter.svg";

const Teams = () => {
  return (
    <div className="text-neutral-50 mt-[170px] mx-[129px]">
      <p className="uppercase leading-loose tracking-widest mb-6">
        Our Clients
      </p>
      <div className="flex justify-between items-center">
        <div>
          <img src={Nataraj_Sharma} alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-400 font-semibold text-xl mt-[18px]">
            Nataraj Sharma
          </p>
        </div>

        <div>
          <img src={Nazmul_Islam} alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-400 font-semibold text-xl mt-[18px]">
            Nazmul Islam
          </p>
        </div>

        <div>
          <img src={Shehnaz_Sultana} alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-400 font-semibold text-xl mt-[18px]">
            Shehnaz Sultana
          </p>
        </div>

        <div>
          <img src={Sajal_Ahmed} alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-400 font-semibold text-xl mt-[18px]">
            Sajal Ahmed
          </p>
        </div>

        <div>
          <img src={Sanjana_Akter} alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-lime-400 font-semibold text-xl mt-[18px]">
            Sanjana Akter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
