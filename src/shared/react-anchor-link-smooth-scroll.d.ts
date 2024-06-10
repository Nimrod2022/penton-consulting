declare module 'react-anchor-link-smooth-scroll' {
  import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

  interface AnchorLinkProps
    extends DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > {
    offset?: () => number;
    onClick?: () => void;
  }

  const AnchorLink: React.FC<AnchorLinkProps>;

  export default AnchorLink;
}
