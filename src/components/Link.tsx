import {
  useNavigate,
  LinkProps as ReactLinkProps,
  useLocation,
} from "react-router-dom";
import usePageTransitionStore from "../store/pageTransitionStore";

type LinkProps = ReactLinkProps & {
  to: string;
};

export default function Link({
  to,
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const navigate = useNavigate();
  const location = useLocation();
  const pageTransitionStore = usePageTransitionStore();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (to.includes("#") && location.pathname === "/") {
      navigate(to);
      return;
    }

    pageTransitionStore.setVisibility(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
