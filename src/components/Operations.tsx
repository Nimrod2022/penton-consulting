type Props = {
  image: string;
  title: string;
  description: string;
};

const Operations = ({ image, title, description }: Props) => {
  return (
    // <div className="bg-[#0E4379] md:w-[380px] md:h-[420px] flex flex-col md:px-5 md:py-10 items-center ">
    //   <img src={image} alt={title} className="size-20" />
    //   <h3 className="text-xl py-5 text-center">{title}</h3>
    //   <p className="text-[#DBE3EB]">{description}</p>
    // </div>

    <div className="bg-[#0E4379] w-full md:w-[90%] xl:w-5/6 p-4 flex flex-col items-center">
      <div className="flex flex-col md:px-5 md:py-10 items-center">
        <img
          src={image}
          alt={title}
          className=" object-cover"
        />
        <h3 className="text-xl py-5 text-center text-white">{title}</h3>
        <p className="text-[#DBE3EB] ">{description}</p>
      </div>
    </div>
  );
};

export default Operations;
