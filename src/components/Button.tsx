import { useNavigate } from "react-router-dom";
import { CurrentPage } from "../shared/types";
import { setCurrentPage } from "../features/buttons/buttonSlice";
import { UseDispatch, useDispatch } from "react-redux";

type Props = {
  targetPage: CurrentPage;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  border?: string
  // setCurrentPage: (value: CurrentPage) => void;
};

const Button = ({
  targetPage,
  children,
  // setCurrentPage,
  bgColor = "bg-[#FFA500]",
  textColor = "text-black",
  border= "border border-[#39FF14]"
}: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Navigating to:", targetPage); 

    dispatch(setCurrentPage(targetPage));
    if (targetPage === CurrentPage.Services) {
      navigate("/services");
    } else if (targetPage === CurrentPage.Projects) {
      navigate("/projects");
    } else if (targetPage === CurrentPage.Contact) {
      navigate("/contact");
    } else {
      navigate("/");
      const element = document.getElementById(targetPage);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 ${bgColor} ${textColor} ${border} rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
