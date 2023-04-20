/* eslint-disable jsx-a11y/anchor-is-valid */

const NavContent = () => {
  return (
    <ul className="flex items-center space-x-12 font-secondary">
      <li className="nav-link">
        <a href="#">Home</a>
      </li>
      <li className="nav-link">
        <a href="#">Company</a>
      </li>
      <li className="nav-link">
        <a href="#">Features</a>
      </li>
      <li className="btn">
        <a href="#">Sign Up</a>
      </li>
    </ul>
  );
};

export default NavContent;
