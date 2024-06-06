import { CurrentPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  targetPage: CurrentPage;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string
  setCurrentPage: (value: CurrentPage) => void;
};

const Button = ({
  targetPage,
  children,
  setCurrentPage,
  bgColor = "bg-[#FFA500]",
  textColor = "text-black",
}: Props) => {
  return (
    <AnchorLink
      href={`#${targetPage}`}
      onClick={() => setCurrentPage(targetPage)}
      className={`px-4 py-2 ${bgColor} ${textColor} rounded-md`}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
