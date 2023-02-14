import Image from "next/image";
import Avatar from "./Avatar";
import CommentIcon from "./icons/CommentIcon";
import LikeIcon from "./icons/LikeIcon";
import ShareIcon from "./icons/ShareIcon";

import maldivesPic from "../../public/maldives.webp";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md bg-white shadow-md shadow-gray-300">
      <div className="flex gap-3 items-center">
        <Avatar />
        <div>
          <p>
            <span className="font-semibold">Ilona Kulikovska</span> added a
            <span className="text-blue-500"> post</span>
          </p>
          <p className="text-gray-400 text-sm">20 minutes ago</p>
        </div>
      </div>

      <div>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
          velit, asperiores corporis vel vero nulla totam recusandae commodi
          pariatur ullam exercitationem voluptatibus officia consectetur eos
          illo laborum, voluptatem autem!
        </p>

        <Image src={maldivesPic} alt="maldives" className="rounded-md w-full" />
      </div>

      <div className="flex gap-3">
        <button className="flex gap-1">
          <LikeIcon />
          124
        </button>
        <button className="flex gap-1">
          <CommentIcon />
          31
        </button>
        <button className="flex gap-1">
          <ShareIcon />8
        </button>
      </div>
    </div>
  );
};

export default PostCard;
