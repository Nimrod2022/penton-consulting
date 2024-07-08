import { IoArrowForwardSharp } from 'react-icons/io5';
import ContactBanner from './shared/ContactBanner';
import DetailedButton from './shared/DetailedButton';
import QuickContact from './shared/QuickContact';
import serviceImage from '../../../../../public/assets/engineering-detailed-image.svg';
// import FAQS from '../../home/sections/FAQS';

const DetailedEnergy = () => {
  return (
    <section className="md:pt-28 pt-20">
      <div className="w-full bg-[#DAEAF2] ">
        <div
          className={`bg-cover w-full bg-[url("../../../../../public/assets/contact-banner.svg")] py-10 md:py-28 services-mobile-bg services-bg `}
        >
          <h4 className=" text-white text-center md:text-3xl font-libre">
            Energy Compliance Services
          </h4>
          <div className="text-center md:text-xl justify-center flex items-center gap-2  pt-5 text-white">
            <p>Home</p>
            <IoArrowForwardSharp className="text-[#FFA500]  size-5 md:size-6" />
            <p>Energy services</p>
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
                This service generally revolves around obtaining pre-requisite
                approvals from the various regulators in the Energy, Petroleum,
                Construction, safety space such as EPRA, KEBS, NEMA, NCA, KeNHA,
                KURA, KeRRA, County Governments, Weights and measures etc., this
                includes application for Licenses and applications for
                Construction permits etc. this also revolves around the various
                Acts of Parliament such as EMCA ACT, Petroleum Act 2019, Water
                Act 2016, Energy Act 2019, Roads Act 2007 among others,
              </p>

              <div>
                <h2 className="text-xl font-bold mb-4">
                  1. Application of Petroleum licenses
                </h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Import of Petroleum Products licenses</li>
                  <li>Export & Wholesale (Reseller Licenses)</li>
                  <li>
                    Brand Owner (Storage & wholesale of LPG in Cylinders
                    license)
                  </li>
                  <li>Import of LPG in Bulk License</li>
                  <li>Export and Wholesale of LPG in Bulk License</li>
                  <li>Petroleum Road Tanker Driver License</li>
                  <li>Electrical Worker License</li>
                  <li>Electrical Contractor License, etc.</li>
                  <li>Solar photovoltaic Technician License</li>
                </ul>

                <h2 className="text-xl font-bold mb-4">
                  2. Application for Construction Permit
                </h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Retail dispensing station</li>
                  <li>Storage and filling facility</li>
                  <li>Consumer site, etc.</li>
                </ul>

                <h2 className="text-xl font-bold mb-4">
                  3. Technical audits for existing facilities
                </h2>

                <h2 className="text-xl font-bold mb-4">
                  4. Generation of closing out action plans for already
                  undertaken audits by lead Agencies
                </h2>

                <h2 className="text-xl font-bold mb-4">
                  5. Facility works in closing out recommendations from
                  Environmental, fire and EPRA audits.
                </h2>

                <h2 className="text-xl font-bold mb-4">
                  6. Follow-up on clearance of fines from regulatory
                  non-compliance including fuel marking penalties with KRA,
                  KEBS, EPRA
                </h2>
              </div>

              {/* <h3 className="text-[#FFA500] pb-5 text-lg">
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
              </p> */}
            </div>
            <div className="pt-10 ">
              {/* <p className="md:text-2xl text-xl text-center font-bold">
                Freaquently Asked Questions
              </p>
              <FAQS /> */}

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

export default DetailedEnergy;
