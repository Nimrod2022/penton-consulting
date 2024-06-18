import { IoArrowForwardSharp } from 'react-icons/io5';

import Form from './Form';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 ">
      <div
        className={`bg-cover w-full bg-[url("../../../public/assets/services-bg.svg")] py-10 md:py-20 services-mobile-bg md:services-bg`}
      >
        <h4 className=" text-white text-center text-xl md:text-3xl font-libre">
          Contact
        </h4>
        <div className="text-center md:text-xl justify-center flex items-center gap-2 text-white">
          <p>Home</p>
          <IoArrowForwardSharp className="text-[#FFA500] size-4 md:size-6" />
          <p>Contact</p>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default Contact;
