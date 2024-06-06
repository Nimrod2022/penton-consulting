import { CurrentPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: CurrentPage;
  children: React.ReactNode;
  setCurrentPage: (value: CurrentPage) => void;
};

const Button = ({ page, children, setCurrentPage }: Props) => {
  return (
    <AnchorLink
      href={`${page}`}
      onClick={() => setCurrentPage(page)}
      className="px-5 py-2"
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
