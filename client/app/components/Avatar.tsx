import UserIcon from "./icons/UserIcon";

const Avatar = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden text-white bg-blue-500">
      <UserIcon />
    </div>
  );
};

export default Avatar;
