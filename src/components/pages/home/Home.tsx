import environmentOperation from '../../../../public/assets/environmental-compliance.svg';
import oilRig from '../../../../public/assets/oil-rig.svg'
import quotesOperation from '../../../../public/assets/quotes.svg';
import safetyOperation from '../../../../public/assets/safety-compliance.svg';
import Button from '../../buttons/Button';
import FAQS from './sections/FAQS';
import Hero from './sections/Hero';
import Operations from './sections/Operations';
import EnergyCompliance from '../../services/EnergyCompliance';
import Engineering from '../../services/Engineering';
import EnvironmentalCompliance from '../../services/EnvironmentalCompliance';
// import {motion} from 'framer-motion'

import { CurrentPage } from '../../../shared/types';

const Home = () => {
  const homeServiceBG = 'bg-[#F6F9FC]';
  return (
    <>
      <section id="home" className="pt-20 w-full ">
        <Hero />
      </section>
      <section id="services" className="w-5/6 xl:w-4/6 mx-auto py-8 md:py-16">
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
        <div className="pt-5 md:flex md:gap-10 md:justify-between ">
          <Engineering bgColor={homeServiceBG} index={0} />
          <EnergyCompliance bgColor={homeServiceBG} index={1} />
          <EnvironmentalCompliance bgColor={homeServiceBG} index={2} />
        </div>

        <div className="md:pt-20 pt-10 flex justify-center md:justify-start ">
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
            <div className="md:w-[40%]">
              <h3 className="text-center py-10 md:py-20 text-xl md:text-3xl">
                Streamline your operations with our Technical Audits and
                Compliance Services
              </h3>
            </div>
          </div>

          <div className="md:flex gap-y-10 md:gap-x-10 md:justify-between mx-auto pb-10 md:pb-20  grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Operations
                image={safetyOperation}
                title="Ensure regulatory compliance with our Licenses and Permits Acquisition"
                description="Our dedicated team of experienced experts is committed to working closely with you 
                to develop a comprehensive and effective Emergency Response Plan that is tailored to your specific
                 needs and requirements."

                index={0}
              />
            </div>

            <div>
              <Operations
                image={environmentOperation}
                title="Mitigate environmental risks with our Environmental Impact Assessments and Audits"
                description="We specialize in providing comprehensive EIA/EA 
                services for various energy and oil & gas projects, including but not limited to feasibility studies,
                impact mitigation strategies, stakeholder engagements and regulatory compliance assessements"
                index={1}
              />
            </div>

            <div>
              <Operations
                image={quotesOperation}
                title="Get accurate quotations for your general engineering and energy works"
                description="Our dedicated team of experienced professionals is committed to providing you with 
                a range of competitive quotations that are customized to perfectly meet your specific needs and requirements."
                index={2}
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" w-5/6 xl:w-4/6 mx-auto py-10 md:py-20">
        <div>
          <div className="md:flex  justify-between gap-10">
            <p className="md:text-3xl text-xl text-[#003366]">
              Providing top-quality consulting services for the oil and gas
              sector.
            </p>
            <p className="md:w-5/6">
              Our company is dedicated to delivering expert solutions in
              architectural, structural, and mechanical drawings for oil and gas
              projects. We also specialize in energy regulatory compliance,
              environmental impact assessments, and offering quotations for
              general works. With a focus on excellence and customer
              satisfaction, we are committed to providing the highest level of
              service in the industry.
            </p>
          </div>
          <div className="py-10 md:py-20">
            <img src={oilRig} alt="rig" />
          </div>
        </div>
      </section>
      <section className="md:pb-20">
        <div
          className={`bg-cover w-full bg-[url("../../../public/assets/services-bg.svg")] md:py-20 services-bg`}
        >
          <h4 className=" text-white text-center text-xl md:pb-3 font-libre">
            Expert Consulting Services for You
          </h4>
          <div className="text-center md:text-xl justify-center items-center md:gap-2 text-white">
            <p className="text-[#C6D1DD] text-md md:pb-10">
              Contact us today for professional consultations and competitive
              quotes.
            </p>

            <Button
              style="rounded-md border-none bg-[#FFA500] text-black "
              targetPage={CurrentPage.Contact}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="w-5/6 xl:w-4/6 mx-auto">
        <div className="md:flex  md:justify-between">
          <div>
            <h3 className="md:text-2xl ">Common</h3>
            <p className="md:w-[80%] md:py-5">
              Find answers to frequently asked questions about our consulting
              services in the oil and gas industry, regulatory compliance, and
              environmental assessments. If you have any further questions,
              kindly contact us.
            </p>

            <Button
              style="rounded-md border-none bg-[#FFA500] text-black "
              targetPage={CurrentPage.Contact}
            >
              Contact Us
            </Button>
          </div>

          <div>
            <p className="text-2xl lg:ml-[36px]  xl:ml-[48px] font-bold">
              Freaquently Asked Questions
            </p>
            <FAQS />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
