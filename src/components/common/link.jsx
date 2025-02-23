import { Link } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} target="_top" {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
