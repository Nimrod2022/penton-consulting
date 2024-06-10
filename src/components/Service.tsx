import { Link } from 'react-router-dom';

type Props = {
  title: string;
  description: string;
  image: string;
  serviceId: number;
};

const Service = ({ title, description, image, serviceId }: Props) => {
  return (
    <div className="md:w-[380px] md:h-[450px]  flex flex-col justify-between">
      <div className="md:w-[380px] md:h-[200px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="bg-[#F6F9FC] flex flex-col items-center py-4">
        <h3 className="text-[#036] md:pt-5 md:pb-3 text md:text-xl text-center">
          {title}
        </h3>
        <p className="mx-5 md:pb-5">{description}</p>
        <div>
          <Link to={`/services/${serviceId}`}>
            <button className="text-[#036] font-semibold  bg-[#FFA500] px-4 py-3 rounded-md">
              Learn more &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
