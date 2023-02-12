import Link from "next/link";
import home from "public/home.svg";
import friends from "public/friends.svg";
import news from "public/news.svg";
import bell from "public/bell.svg";
import logout from "public/logout.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav>
      <ul className="grid gap-y-4">
        <li className="navigation-item">
          <Image src={home} alt="home" className="mr-2" />
          <Link href="/home" className="grow">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Image src={friends} alt="home" className="mr-2" />
          <Link href="/friends" className="grow">
            Friends
          </Link>
        </li>
        <li className="navigation-item">
          <Image src={news} alt="home" className="mr-2" />
          <Link href="/posts" className="grow">
            Posts
          </Link>
        </li>
        <li className="navigation-item">
          <Image src={bell} alt="home" className="mr-2" />
          <Link href="/notifications" className="grow">
            Notifications
          </Link>
        </li>
        <li className="navigation-item">
          <Image src={logout} alt="home" className="mr-2" />
          <Link href="/" className="grow">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
