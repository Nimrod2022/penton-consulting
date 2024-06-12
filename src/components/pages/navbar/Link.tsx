import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CurrentPage } from '../../shared/types';

type Props = {
  page: string;
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Link = ({ page, currentPage, setCurrentPage }: Props) => {
  const lowerCasePage = page.toLowerCase() as CurrentPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        currentPage === lowerCasePage ? 'text-[#0D65BE]' : ''
      } hover:text-[#1E568E]`}
      onClick={() => setCurrentPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
