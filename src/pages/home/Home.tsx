import Button from '../../components/buttons/Button';
import Hero from '../../components/Hero';
import Operations from '../../components/Operations';
import EnergyCompliance from '../../components/services/EnergyCompliance';
import Engineering from '../../components/services/Engineering';
import EnvironmentalCompliance from '../../components/services/EnvironmentalCompliance';
import environmentOperation from '../../../public/assets/environmental-compliance.svg';
import safetyOperation from '../../../public/assets/safety-compliance.svg';
import quotesOperation from '../../../public/assets/quotes.svg';
import oilRig from '../../../public/assets/oil-rig.svg';

import { CurrentPage } from '../../shared/types';

const Home = () => {
  const homeServiceBG = 'bg-[#F6F9FC]';
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
        <div className="pt-5 md:flex gap-10 md:justify-between ">
          <Engineering bgColor={homeServiceBG} />
          <EnergyCompliance bgColor={homeServiceBG} />
          <EnvironmentalCompliance bgColor={homeServiceBG} />
        </div>

        <div className="pt-20 flex justify-center md:justify-start ">
          <Button
            targetPage={CurrentPage.Services}
            style="text-black px-5 md:px-8 md:text-xl border-none bg-[#FFA500] rounded-md "
          >
            See all
          </Button>
        </div>
      </section>
      <section className="w-full bg-[#036]">
        <div className="w-5/6 xl:w-4/6 mx-auto text-white">
          <div className="flex justify-center items-center ">
            <div className="w-[40%]">
              <h3 className="text-center py-20 md:text-3xl">
                Streamline your operations with our Technical Audits and
                Compliance Services
              </h3>
            </div>
          </div>

          <div className="md:flex gap-x-10 justify-between mx-auto md:pb-20">
            <div>
              <Operations
                image={safetyOperation}
                title="Ensure regulatory compliance with our Licenses and Permits Acquisition"
                description="Our dedicated team of experienced experts is committed to working closely with you 
                to develop a comprehensive and effective Emergency Response Plan that is tailored to your specific
                 needs and requirements."
              />
            </div>

            <div>
              <Operations
                image={environmentOperation}
                title="Mitigate environmental risks with our Environmental Impact Assessments and Audits"
                description="We specialize in providing comprehensive EIA/EA 
                services for various energy and oil & gas projects, including but not limited to feasibility studies,
                impact mitigation strategies, stakeholder engagements and regulatory compliance assessements"
              />
            </div>

            <div>
              <Operations
                image={quotesOperation}
                title="Get accurate quotations for your general engineering and energy works"
                description="Our dedicated team of experienced professionals is committed to providing you with 
                a range of competitive quotations that are customized to perfectly meet your specific needs and requirements."
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" w-5/6 xl:w-4/6 mx-auto md:py-20">
        <div>
          <div className="flex  justify-between gap-10">
            <p className="text-3xl text-[#003366]">
              Providing top-quality consulting services for the oil and gas
              sector.
            </p>
            <p className="w-5/6">
              Our company is dedicated to delivering expert solutions in
              architectural, structural, and mechanical drawings for oil and gas
              projects. We also specialize in energy regulatory compliance,
              environmental impact assessments, and offering quotations for
              general works. With a focus on excellence and customer
              satisfaction, we are committed to providing the highest level of
              service in the industry.
            </p>
          </div>
          <div className='md:py-20'>
            <img src={oilRig} alt="rig" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
