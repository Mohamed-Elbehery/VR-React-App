/* eslint-disable jsx-a11y/anchor-is-valid */

const Nav = () => {
  const links = [
    { label: "Home", class: "nav-link" },
    { label: "Company", class: "nav-link" },
    { label: "Features", class: "nav-link" },
    { label: "Sign Up", class: "btn" },
  ];

  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center font-secondary gap-x-12">
        {links?.map((link) => (
          <li className={link.class}>
            <a href="#">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
