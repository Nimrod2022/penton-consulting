import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage } from '../../reducers/buttonSlice';
import { CurrentPage } from '../../shared/types';

type Props = {
  targetPage: CurrentPage;
  children: React.ReactNode;
  style?: string;
};

const Button = ({
  targetPage,
  children,

  style = 'bg-[#FFA500] text-black  border border-[#39FF14]',
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Navigating to:', targetPage);

    dispatch(setCurrentPage(targetPage));
    if (targetPage === CurrentPage.Services) {
      navigate('/services');
    } else if (targetPage === CurrentPage.Projects) {
      navigate('/projects');
    } else if (targetPage === CurrentPage.Contact) {
      navigate('/contact');
    } else {
      navigate('/');
      const element = document.getElementById(targetPage);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button onClick={handleClick} className={`px-4 py-2 ${style}  `}>
      {children}
    </button>
  );
};

export default Button;
