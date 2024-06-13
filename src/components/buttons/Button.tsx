import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setCurrentPage } from '../../reducers/buttonSlice';
import { CurrentPage } from '../../shared/types';

type Props = {
  targetPage: CurrentPage;
  children: React.ReactNode;
  style?: string;
  activeStyle?: string;
};

const Button = ({
  targetPage,
  children,
  style = 'bg-[#FFA500] text-black border border-[#39FF14]',
  activeStyle = 'bg-[#036] text-white border-[#036] w-full ',
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isActive = location.pathname.includes(targetPage);

  const handleClick = () => {
    dispatch(setCurrentPage(targetPage));
    navigate(`/${targetPage}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 ${isActive ? activeStyle : style}`}
    >
      {children}
    </button>
  );
};

export default Button;
