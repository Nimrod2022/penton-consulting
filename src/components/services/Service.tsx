import { Link } from 'react-router-dom';

type Props = {
  title: string;
  description: string;
  image: string;
  serviceId: number;
  bgColor: string;
};

const Service = ({ title, bgColor, description, image, serviceId }: Props) => {
  return (
    <div className="md:w-[380px] md:h-[450px]  flex flex-col justify-between">
      <Link to={`/services/${serviceId}`}>
        <div className="md:w-[380px] md:h-[200px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className={`${bgColor} flex flex-col items-center py-4`}>
          <h3 className="text-[#036] pt-3 md:pt-5 pb-3 text md:text-xl text-center">
            {title}
          </h3>
          <p className="mx-5 md:pb-5">{description}</p>
          <div className="md:pt-0 pt-3">
            <Link to={`/services/${serviceId}`}>
              <button className="text-[#036] px-2 py-2 font-semibold hover:bg-[#036] hover:text-white  md:px-4 md:py-3 rounded-md">
                Learn more &gt;
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
