import Avatar from "app/components/Avatar";
import EmojiIcon from "app/components/icons/EmojiIcon";
import MapIcon from "app/components/icons/MapIcon";
import UserIcon from "app/components/icons/UserIcon";

export default function Home() {
  return (
    <main>
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
            <UserIcon />
            People
          </button>
          <button className="flex gap-1">
            <MapIcon />
            Location
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
    </main>
  );
}
