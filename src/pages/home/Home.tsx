import Button from '../../components/buttons/Button';
import Hero from '../../components/Hero';
import EnergyCompliance from '../../components/services/EnergyCompliance';
import Engineering from '../../components/services/Engineering';
import EnvironmentalCompliance from '../../components/services/EnvironmentalCompliance';
import { CurrentPage } from '../../shared/types';

const Home = () => {
  return (
    <>
      <section id="home" className="pt-20 w-full ">
        <Hero />
      </section>
      <section id="services" className="w-5/6 xl:w-4/6 mx-auto py-16">
        <div className="mx-auto">
          <div>
            <h3 className="text-[#FFA500] font-semibold md:text-2xl py-5">
              Expertise
            </h3>
            <h2 className="text-[#003366] md:text-3xl ">
              Comprehensive Consulting Services for <br /> Energy Projects
            </h2>
            <p className="md:w-3/6 pt-3">
              We provide a range of services to support energy projects,
              including architectural, structural, and mechanical drawings for
              gas stations and filling plants. We also offer energy regulatory
              compliance services, environmental impact assessments, and
              quotations for general engineering works.
            </p>
          </div>
        </div>
        <div className="pt-5 md:flex md:justify-between ">
          <Engineering />
          <EnergyCompliance />
          <EnvironmentalCompliance />
        </div>

        <div className="md:py-20  py-10 flex justify-center md:justify-start ">
          <Button
            targetPage={CurrentPage.Services}
            style="text-black px-5 md:px-8 md:text-xl border-none bg-[#FFA500] rounded-md "
          >
            See all
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
