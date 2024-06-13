import { TEInput, TETextarea } from 'tw-elements-react';

const QuickContact = () => {
  return (
    <div className="block w-full font-libre text-black bg-[#E3F2FA] p-6 border-2 border-[#858686]">
      <h1 className="text-2xl pb-5">Quick Contact</h1>
      <form>
        <TEInput
          type="text"
          placeholder="Name"
          className="mb-6 rounded-none p-3 text-sm placeholder-black"
        ></TEInput>

        <TEInput
          type="email"
          placeholder="Email"
          className="mb-6 rounded-none p-3 text-sm placeholder-[#000]"
        ></TEInput>

        <div className="relative mb-6">
          <TETextarea
            id="exampleFormControlTextarea13"
            placeholder="Message"
            rows={3}
            className="rounded-none p-4 text-sm placeholder-black"
          />
        </div>

        <button
          type="button"
          className=" w-full bg-[#FFA500] px-6 pb-2 pt-2.5 text-xs font-medium text-md  text-black "
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default QuickContact;
