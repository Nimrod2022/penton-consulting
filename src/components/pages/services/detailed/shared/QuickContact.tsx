import { TEInput, TERipple, TETextarea } from 'tw-elements-react';

type Props = {};

const QuickContact = (props: Props) => {
  return (
    <div className="block max-w-sm font-libre text-black bg-[#E3F2FA] p-6 border-2 border-[#858686]">
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

        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            className="inline-block w-full bg-[#FFA500] px-6 pb-2 pt-2.5 text-xs font-medium text-md leading-normal text-black "
          >
            Send message
          </button>
        </TERipple>
      </form>
    </div>
  );
};

export default QuickContact;
