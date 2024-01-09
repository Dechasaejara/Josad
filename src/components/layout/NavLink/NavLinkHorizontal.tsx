import Link from "next/link";
import { IconType } from "react-icons";

export interface NavLink {
  label: string;
  path: string;
  icon: IconType;
}

interface NavProps {
  navLinks: NavLink[];
}

const NavLinkHorizontal: React.FC<NavProps> = ({ navLinks }) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <span className="flex items-center space-x-1 scale-animation">
                <link.icon />
                <span>{link.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinkHorizontal;
