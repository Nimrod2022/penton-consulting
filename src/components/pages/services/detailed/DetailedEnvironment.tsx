import { IoArrowForwardSharp } from 'react-icons/io5';
import ContactBanner from './shared/ContactBanner';
import DetailedButton from './shared/DetailedButton';
import QuickContact from './shared/QuickContact';
import serviceImage from '../../../../../public/assets/engineering-detailed-image.svg';
import FAQS from '../../home/sections/FAQS';

const DetailedEnvironment = () => {
  return (
    <section className="pt-28">
      <div className="w-full bg-[#DAEAF2] ">
        <div
          className={`bg-cover w-full bg-[url("../../../../../public/assets/contact-banner.svg")] md:py-28 services-bg `}
        >
          <h4 className=" text-white text-center text-3xl font-libre">
            Environmental Compliance Services
          </h4>
          <div className="text-center md:text-xl justify-center flex items-center md:gap-2  pt-5 text-white">
            <p>Home</p>
            <IoArrowForwardSharp className="text-[#FFA500]  size-6" />
            <p>Environmental Services</p>
          </div>
        </div>
        <div className="w-5/6 xl:w-4/6 mx-auto bg-[#DAEAF2] md:flex justify-between py-20">
          {/* left menu */}
          <div className="w-[30%] flex flex-col gap-10">
            <div>
              <DetailedButton />
            </div>
            <div className="h-80">
              <ContactBanner />
            </div>
            <QuickContact />
          </div>
          {/* Text content right */}
          <div className="w-[65%] text-[#373B3D]">
            <img src={serviceImage} alt="engineering" />

            <h1 className="text-black text-2xl font-libre py-3">
              Navigate Ennvironmental regulatory compliance with Confidence
            </h1>

            <p className=" pb-10">
              In the dynamic world of energy, staying compliant with all
              regulations is not just about legal requirement—it is strategic
              imperative. At Penton, we specialize in guiding companies through
              the maze of licenses, permits, technical audits, and emergency
              response planning. Our expert team ensures that your energy
              projects are not only compliant but also optimized for efficiency
              and sustainability.
            </p>

            <h3 className="text-[#FFA500] pb-5 text-lg">Detailed breakdown</h3>

            <h2 className="text-[#003366] text-xl">Licenses & Permits</h2>
            <p className="pb-5">
              Secure all necessary approvals to launch and operate your energy
              projects legally across different regions. Our service covers
              application processes, documentation, and liaising with regulatory
              bodies.
            </p>

            <h2 className="text-[#003366]  text-xl">Technical audits</h2>
            <p className="pb-5">
              Rely on our thorough audits to ensure that all aspects of your
              energy project adhere to current regulations and industry
              standards. We help identify potential compliance issues before
              they become costly problems.
            </p>

            <h2 className="text-[#003366] text-xl">Emergency response plans</h2>
            <p>
              Prepare for the unexpected with our strategic emergency response
              planning. Our tailored plans help you manage risks and minimize
              downtime in crisis situations, ensuring you maintain regulatory
              compliance even under pressure.
            </p>

            <div className="justify-center pt-10 flex-col">
              <p className="text-2xl text-center font-bold">
                Freaquently Asked Questions
              </p>
              <FAQS />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedEnvironment;
