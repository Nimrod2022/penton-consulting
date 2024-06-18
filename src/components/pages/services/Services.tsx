import { IoArrowForwardSharp } from 'react-icons/io5';
import EnergyCompliance from '../../services/EnergyCompliance';
import Engineering from '../../services/Engineering';
import EnvironmentalCompliance from '../../services/EnvironmentalCompliance';

const Services = () => {
  const ServicesBG = 'bg-white';
  // md:w-5/6 xl:w-4/6
  return (
    <section id="services" className="pt-28">
      <div
        className={`bg-cover w-full bg-[url("../../../public/assets/services-bg.svg")] py-10 md:py-28 services-mobile-bg md:services-bg`}
      >
        <h4 className=" text-white text-center text-xl md:text-3xl font-libre">
          Services
        </h4>
        <div className="text-center md:text-xl justify-center flex items-center gap-2 text-white">
          <p>Home</p>
          <IoArrowForwardSharp className="text-[#FFA500] size-4 md:size-6" />
          <p>Services</p>
        </div>
      </div>

      <div className=" bg-[#DAEAF2]  md:py-10 ">
        <div className="text-center py-5">
          <p className="text-[#FFA500] text-xl"> Our Services Portfolio</p>
          <p className="font-libre text-xl md:text-3xl md:pb-10 pt-5 md:px-0 px-5">
            Comprehensive Energy Solutions
          </p>
        </div>
        <div className=" md:w-5/6 xl:w-4/6 mx-auto">
          <div className="md:justify-between md:flex gap-10 md:pb-10">
            <Engineering bgColor={ServicesBG} index={0} />
            <EnergyCompliance bgColor={ServicesBG} index={1} />
            <EnvironmentalCompliance bgColor={ServicesBG} index={2} />
          </div>
          <div className="md:flex  gap-10 md:justify-between md:pb-10">
            <EnergyCompliance bgColor={ServicesBG} index={3} />
            <EnvironmentalCompliance bgColor={ServicesBG} index={4} />
            <EnvironmentalCompliance bgColor={ServicesBG} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
