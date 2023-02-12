import Link from "next/link";
import links from "app/assets/routes";

interface NavigationProps {
  currentPath: string | null;
}

const Navigation = ({ currentPath }: NavigationProps) => {
  return (
    <nav>
      <ul className="grid">
        {links.map(({ path, name, icon }) => (
          <Link
            key={path}
            href={path}
            className={`navigation-item ${currentPath === path && "active"}`}
          >
            {icon}
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
