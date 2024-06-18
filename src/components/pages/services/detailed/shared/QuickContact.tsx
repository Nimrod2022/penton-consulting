import React, { useState } from 'react';

const QuickContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="block w-full font-libre text-black bg-[#E3F2FA] p-6 border-2 border-[#858686]">
      <h1 className="text-lg md:text-2xl pb-5">Quick Contact</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-6 rounded-none p-3 text-sm placeholder-black w-full"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6 rounded-none p-3 text-sm placeholder-[#000] w-full"
        />

        <div className="relative mb-6">
          <textarea
            id="exampleFormControlTextarea13"
            placeholder="Message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-none p-4 text-sm placeholder-black w-full"
          />
        </div>

        <button
          type="button"
          className="w-full bg-[#FFA500] px-6 pb-2 pt-2.5 text-xs font-medium text-md text-black"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default QuickContact;
