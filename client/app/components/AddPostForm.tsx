import Avatar from "./Avatar";
import EmojiIcon from "./icons/EmojiIcon";
import MapIcon from "./icons/MapIcon";
import PaperClipIcon from "./icons/PaperClipIcon";
import UsersIcon from "./icons/UsersIcon";

const AddPostForm = () => {
  return (
    <div className="p-4 rounded-md bg-white shadow-md shadow-gray-300">
      <div className="flex gap-3 mb-3">
        <Avatar />
        <textarea
          placeholder="What's on your mind, Anton?"
          rows={3}
          className="grow p-2"
        />
      </div>

      <div className="flex gap-3 items-center">
        <button className="flex gap-1">
          <UsersIcon />
          People
        </button>
        <button className="flex gap-1">
          <MapIcon />
          Location
        </button>
        <button className="flex gap-1">
          <PaperClipIcon />
          Image
        </button>
        <button className="flex gap-1">
          <EmojiIcon />
          Emoji
        </button>
        <button className="ml-auto px-4 py-2 rounded-md text-white bg-blue-500">
          Add post
        </button>
      </div>
    </div>
  );
};

export default AddPostForm;
