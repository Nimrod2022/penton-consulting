import { IoArrowForwardSharp } from 'react-icons/io5';
import ContactBanner from './shared/ContactBanner';
import DetailedButton from './shared/DetailedButton';
import QuickContact from './shared/QuickContact';
import serviceImage from '../../../../../public/assets/engineering-detailed-image.svg';
import FAQS from '../../home/sections/FAQS';

const DetailedEngineering = () => {
  return (
    <section className="md:pt-28 pt-20 ">
      <div className="w-full bg-[#DAEAF2] ">
        <div
          className={`bg-cover w-full bg-[url("../../../../../public/assets/contact-banner.svg")] py-10 md:py-28 services-mobile-bg services-bg `}
        >
          <h4 className=" text-white text-center md:text-3xl font-libre">
            Architectural, Structural & Mechanical Drawings
          </h4>
          <div className="text-center md:text-xl justify-center flex items-center gap-2 pt-3 md:pt-5 text-white">
            <p>Home</p>
            <IoArrowForwardSharp className="text-[#FFA500] size-5 md:size-6" />
            <p>Engineering services</p>
          </div>
        </div>
        <div className="w-full md:w-5/6 xl:w-4/6 mx-auto bg-[#DAEAF2] md:flex md:justify-between py-10 md:py-20">
          {/* left menu */}
          <div className="md:w-[30%] md:flex md:flex-col gap-10 px-5  md:px-0">
            <div>
              <DetailedButton />
            </div>
            <div className="h-80 md:block hidden">
              <ContactBanner />
            </div>
            <div className="md:block hidden">
              <QuickContact />
            </div>
          </div>
          {/* Text content right */}
          <div className=" md:w-[65%] text-[#373B3D] ">
            <div className="px-5  md:px-0">
              <img
                src={serviceImage}
                alt="engineering"
                className="md:pt-0 pt-5"
              />

              <h1 className="text-black md:text-2xl font-libre py-3">
                Navigate Energy Regulations with Confidence
              </h1>

              <p className="pb-5 md:pb-10">
                In the dynamic world of energy, staying compliant with all
                regulations is not just about legal requirement—it is strategic
                imperative. At Penton, we specialize in guiding companies
                through the maze of licenses, permits, technical audits, and
                emergency response planning. Our expert team ensures that your
                energy projects are not only compliant but also optimized for
                efficiency and sustainability.
              </p>

              <h3 className="text-[#FFA500] pb-5 text-lg">
                Detailed breakdown
              </h3>

              <h2 className="text-[#003366] text-xl">Licenses & Permits</h2>
              <p className="pb-5">
                Secure all necessary approvals to launch and operate your energy
                projects legally across different regions. Our service covers
                application processes, documentation, and liaising with
                regulatory bodies.
              </p>

              <h2 className="text-[#003366]  text-xl">Technical audits</h2>
              <p className="pb-5">
                Rely on our thorough audits to ensure that all aspects of your
                energy project adhere to current regulations and industry
                standards. We help identify potential compliance issues before
                they become costly problems.
              </p>

              <h2 className="text-[#003366] text-xl">
                Emergency response plans
              </h2>
              <p>
                Prepare for the unexpected with our strategic emergency response
                planning. Our tailored plans help you manage risks and minimize
                downtime in crisis situations, ensuring you maintain regulatory
                compliance even under pressure.
              </p>
            </div>
            <div className="pt-10 ">
              <p className="md:text-2xl text-xl text-center font-bold">
                Freaquently Asked Questions
              </p>
              <FAQS />

              <div className="block md:hidden px-5">
                <QuickContact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedEngineering;
