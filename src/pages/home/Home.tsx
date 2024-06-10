import Hero from '../../components/Hero';
import Service from '../../components/Service';
import engineeringService from '../../../public/assets/engineering-service.svg';
import energyCompliance from '../../../public/assets/energy-compliance-service.svg';
import environmentService from '../../../public/assets/environment-services.svg';
import Button from '../../components/buttons/Button';
import { CurrentPage } from '../../shared/types';


const Home = () => {
  return (
    <>
      <section id="home" className="pt-20 w-full min-h-full ">
        <Hero />
      </section>
      <section id="services" className="w-5/6 xl:w-4/6 mx-auto py-16">
        <div className="mx-auto">
          <div>
            <h3 className="text-[#FFA500] font-semibold text-md py-5">
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
          <Service
            title="Architectural, Structural & Mechanical Drawings"
            description="We conduct thorough environmental impact assessments and audits (EIA/EA)
           for energy projects in the oil and gas industry, as well as general projects."
            image={engineeringService}
            serviceId={1}
          ></Service>

          <Service
            title="Energy Regulatory Compliance"
            description="Ensure your energy projects meet all regulatory requirements with our comprehensive
             compliance services, including licenses, permits, technical audits, and emergency response plans."
            image={energyCompliance}
            serviceId={2}
          ></Service>

          <Service
            title="Architectural, Structural & Mechanical Drawings"
            description="We conduct thorough environmental impact assessments and audits (EIA/EA)
           for energy projects in the oil and gas industry, as well as general projects."
            image={environmentService}
            serviceId={3}
          ></Service>
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
