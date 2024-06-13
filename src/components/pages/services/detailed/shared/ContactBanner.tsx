import callCenter from '../../../../../../public/assets/call-center.svg';

const ContactBanner = () => {
  return (
    <div
      className={`bg-cover bg-center text-xl font-libre bg-no-repeat w-full h-80 flex justify-center text-white items-center bg-[url('../../../../public/assets/contact-banner.svg')] `}
    >
      <div className="items-center  justify-center">
        <h1 className="pb-8 ">Need Any Help?</h1>
        <img
          src={callCenter}
          alt="call-center icon"
          className="size-28 md:ml-10 pb-8"
        />

        <h1>+254 768 794629</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
