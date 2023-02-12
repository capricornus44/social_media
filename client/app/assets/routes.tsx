import HomeIcon from "../components/icons/HomeIcon";
import UsersIcon from "../components/icons/UsersIcon";
import BookmarkIcon from "../components/icons/BookmarkIcon";
import BellIcon from "../components/icons/BellIcon";
import LogoutIcon from "../components/icons/LogoutIcon";

const links = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon />
  },
  {
    path: "/friends",
    name: "Friends",
    icon: <UsersIcon />
  },
  {
    path: "/posts",
    name: "Saved posts",
    icon: <BookmarkIcon />
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: <BellIcon />
  },
  {
    path: "/",
    name: "Logout",
    icon: <LogoutIcon />
  }
];

export default links