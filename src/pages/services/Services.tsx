import { IoArrowForwardSharp } from 'react-icons/io5';

import EnergyCompliance from '../../components/services/EnergyCompliance';
import Engineering from '../../components/services/Engineering';
import EnvironmentalCompliance from '../../components/services/EnvironmentalCompliance';

const Services = () => {
  const ServicesBG = 'bg-white';
  // md:w-5/6 xl:w-4/6
  return (
    <section id="services" className="pt-28">
      <div
        className={`bg-cover w-full bg-[url("../../../public/assets/services-bg.svg")] md:py-28 services-bg`}
      >
        <h4 className=" text-white text-center text-3xl font-libre">
          Services
        </h4>
        <div className="text-center md:text-xl justify-center flex items-center md:gap-2 text-white">
          <p>Home</p>
          <IoArrowForwardSharp className="text-[#FFA500]  size-6" />
          <p>Services</p>
        </div>
      </div>

      <div className=" bg-[#DAEAF2] py-16 ">
        <div className="text-center py-10">
          <p className="text-[#FFA500] text-xl"> Our Services Portfolio</p>
          <p className="font-libre text-3xl md:pb-10 pt-5">
            Comprehensive Energy Solutions
          </p>
        </div>
        <div className=" md:w-5/6 xl:w-4/6 mx-auto">
          <div className="md:justify-between md:flex gap-10 md:pb-20">
            <Engineering bgColor={ServicesBG} />
            <EnergyCompliance bgColor={ServicesBG} />
            <EnvironmentalCompliance bgColor={ServicesBG} />
          </div>
          <div className="md:flex  gap-10 md:justify-between md:pb-10">
            <EnergyCompliance bgColor={ServicesBG} />
            <EnvironmentalCompliance bgColor={ServicesBG} />
            <EnvironmentalCompliance bgColor={ServicesBG} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
