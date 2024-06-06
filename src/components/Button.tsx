import { useNavigate } from "react-router-dom";
import { CurrentPage } from "../shared/types";

type Props = {
  targetPage: CurrentPage;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  setCurrentPage: (value: CurrentPage) => void;
};

const Button = ({
  targetPage,
  children,
  setCurrentPage,
  bgColor = "bg-[#FFA500]",
  textColor = "text-black",
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentPage(targetPage);
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
      className={`px-4 py-2 ${bgColor} ${textColor} rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
